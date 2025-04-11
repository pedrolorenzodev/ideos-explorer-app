
import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, History, MessageSquare, TestTube } from 'lucide-react';

const PerfilPage = () => {
  return (
    <div className="pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Avatar className="h-16 w-16 mr-4">
            <img src="/placeholder.svg" alt="Perfil de usuario" />
          </Avatar>
          
          <div>
            <h1 className="text-2xl font-bold">Mi Perfil</h1>
            <p className="text-gray-600">Gestiona tus preferencias e historial</p>
          </div>
        </div>
        
        <Tabs defaultValue="favoritos" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="favoritos">Favoritos</TabsTrigger>
            <TabsTrigger value="historial">Historial</TabsTrigger>
            <TabsTrigger value="chats">Chats</TabsTrigger>
            <TabsTrigger value="tests">Tests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="favoritos" className="animate-fade-in">
            <Card className="p-5">
              <div className="flex items-center mb-4">
                <BookOpen size={20} className="mr-2" />
                <h2 className="text-lg font-medium">Ideologías Favoritas</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <span>Liberalismo</span>
                  <Button variant="ghost" size="sm">Ver</Button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <span>Keynesianismo</span>
                  <Button variant="ghost" size="sm">Ver</Button>
                </div>
              </div>
              
              <p className="text-gray-500 text-sm mt-4">
                * Aquí se mostrarán las ideologías que marques como favoritas.
              </p>
            </Card>
          </TabsContent>
          
          <TabsContent value="historial" className="animate-fade-in">
            <Card className="p-5">
              <div className="flex items-center mb-4">
                <History size={20} className="mr-2" />
                <h2 className="text-lg font-medium">Historial de Exploración</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <div>
                    <span className="block">Marxismo</span>
                    <span className="text-xs text-gray-500">Perspectiva: Neutra / Histórica</span>
                  </div>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock size={14} className="mr-1" />
                    Hace 2 días
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <div>
                    <span className="block">AnarcoCapitalismo</span>
                    <span className="text-xs text-gray-500">Perspectiva: Liberal</span>
                  </div>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock size={14} className="mr-1" />
                    Hace 1 semana
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="chats" className="animate-fade-in">
            <Card className="p-5">
              <div className="flex items-center mb-4">
                <MessageSquare size={20} className="mr-2" />
                <h2 className="text-lg font-medium">Chats Recientes</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <img src="/placeholder.svg" alt="Karl Marx" />
                    </Avatar>
                    <div>
                      <span className="block">Karl Marx</span>
                      <span className="text-xs text-gray-500">Último mensaje: Hace 3 días</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Continuar</Button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <img src="/placeholder.svg" alt="Adam Smith" />
                    </Avatar>
                    <div>
                      <span className="block">Adam Smith</span>
                      <span className="text-xs text-gray-500">Último mensaje: Hace 1 semana</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Continuar</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="tests" className="animate-fade-in">
            <Card className="p-5">
              <div className="flex items-center mb-4">
                <TestTube size={20} className="mr-2" />
                <h2 className="text-lg font-medium">Tests Realizados</h2>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Test de Afinidad Ideológica</span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock size={14} className="mr-1" />
                      Hace 1 día
                    </span>
                  </div>
                  <div className="text-sm">
                    <p>Resultado: Mayor afinidad con Liberalismo (65%)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full">Realizar nuevo test</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <FloatingButtons />
      <BottomNavigation />
    </div>
  );
};

export default PerfilPage;
