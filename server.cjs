const express = require('express');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
const path = require('path');

// Cargar variables de entorno
dotenv.config();

// Crear la app Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Inicializar cliente de Google Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

// Endpoint para el chat
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, personaje } = req.body;

    if (!messages || !Array.isArray(messages) || !personaje) {
      return res.status(400).json({ error: 'Solicitud inválida. Se requieren mensajes y personaje.' });
    }

    // Crear el mensaje del sistema según el personaje
    const systemPrompt = `Eres ${personaje.nombre}, representante de la ideología ${personaje.ideologia}. 
    Debes responder como si fueras esta figura histórica, con su estilo de comunicación, 
    utilizando sus frases típicas y defendiendo sus ideas políticas y económicas.
    
    Información clave sobre ti:
    - Nombre: ${personaje.nombre}
    - Ideología: ${personaje.ideologia}
    - Estilo de comunicación: mantén un tono consistente con la personalidad histórica.
    
    Defiende con pasión las ideas de tu ideología. Si alguien cuestiona tus ideas,
    responde con los argumentos que utilizarías como ${personaje.nombre}.`;

    // Configurar la respuesta para streaming
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    try {
      // Inicializar el modelo generativo de Gemini
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
      
      // Adaptar los mensajes al formato esperado por Gemini
      const chatHistory = [];
      
      // Agregar el prompt del sistema como primer mensaje del asistente
      chatHistory.push({ role: 'model', parts: [{ text: systemPrompt }] });
      
      // Procesar historial de mensajes
      for (const msg of messages) {
        const role = msg.role === 'user' ? 'user' : 'model';
        chatHistory.push({ role, parts: [{ text: msg.content }] });
      }
      
      // Iniciar chat
      const chat = model.startChat({ history: chatHistory });
      
      // Obtener la solicitud más reciente (última pregunta del usuario)
      const lastUserMessage = messages[messages.length - 1].content;
      
      // Streaming de respuesta
      const result = await chat.sendMessageStream(lastUserMessage);
      for await (const chunk of result.stream) {
        const content = chunk.text();
        if (content) {
          res.write(`data: ${JSON.stringify({ content })}\n\n`);
        }
      }
      
      // Finalizar el stream
      res.write('data: [DONE]\n\n');
      res.end();
    } catch (error) {
      console.error('Error en el streaming:', error);
      if (res.headersSent) {
        res.write(`data: ${JSON.stringify({ error: 'Error al procesar la respuesta' })}\n\n`);
        res.end();
      } else {
        res.status(500).json({ error: 'Error al procesar la respuesta' });
      }
    }
  } catch (error) {
    console.error('Error en el endpoint de chat:', error);
    
    // Si ya enviamos headers para streaming, intentamos enviar el error como un evento
    if (res.headersSent) {
      res.write(`data: ${JSON.stringify({ error: 'Error al procesar la solicitud' })}\n\n`);
      res.end();
    } else {
      res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
  }
});

// Para cualquier otra ruta que no sea /api, servir el archivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
}); 