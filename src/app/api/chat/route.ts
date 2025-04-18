import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
  const { messages, personaje } = await request.json();

  // Definir el sistema según el personaje seleccionado
  const getSystemPrompt = (personaje: any) => {
    return `Eres ${personaje.nombre}, representante de la ideología ${personaje.ideologia}. 
    Debes responder como si fueras esta figura histórica, con su estilo de comunicación, 
    utilizando sus frases típicas y defendiendo sus ideas políticas y económicas.
    
    Información clave sobre ti:
    - Nombre: ${personaje.nombre}
    - Ideología: ${personaje.ideologia}
    - Estilo de comunicación: mantén un tono consistente con la personalidad histórica.
    
    Defiende con pasión las ideas de tu ideología. Si alguien cuestiona tus ideas,
    responde con los argumentos que utilizarías como ${personaje.nombre}.`;
  };

  try {
    // Inicializar Gemini
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    // Preparar historial de chat para Gemini
    const chatHistory = [];
    
    // Agregar el prompt del sistema como primer mensaje del asistente
    chatHistory.push({ role: 'model', parts: [{ text: getSystemPrompt(personaje) }] });
    
    // Procesar historial de mensajes previos
    for (const msg of messages) {
      const role = msg.role === 'user' ? 'user' : 'model';
      chatHistory.push({ 
        role, 
        parts: [{ text: msg.content }] 
      });
    }

    // Iniciar chat
    const chat = model.startChat({ history: chatHistory });
    
    // Obtener la solicitud más reciente (última pregunta del usuario)
    const lastUserMessage = messages[messages.length - 1].content;

    // Crear una respuesta en streaming
    const result = await chat.sendMessageStream(lastUserMessage);
    
    // Crear respuesta en formato SSE (Server-Sent Events)
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              const data = `data: ${JSON.stringify({ content: text })}\n\n`;
              controller.enqueue(new TextEncoder().encode(data));
            }
          }
          controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error("Error en el stream de Gemini:", error);
          controller.error(error);
        }
      }
    });

    // Devolver la respuesta en streaming con las cabeceras adecuadas
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error("Error procesando la solicitud:", error);
    return new Response(JSON.stringify({ error: 'Error al procesar la solicitud' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 