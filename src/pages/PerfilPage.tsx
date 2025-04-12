import BottomNavigation from '@/components/BottomNavigation';
import FloatingButtons from '@/components/FloatingButtons';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, History, MessageSquare, TestTube } from 'lucide-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PerfilPage = () => {
  return (
    <div className="pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-white/10 mb-4 overflow-hidden border-2 border-white/50 flex items-center justify-center">
            <AccountCircleIcon className="w-20 h-20 text-white/80" />
          </div>
          <h2 className="text-2xl font-bold text-white">Mi Perfil</h2>
          <p className="text-white/80">Explora tus ideologías favoritas</p>
        </div>
        
        <Tabs defaultValue="favoritos" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="favoritos">Favoritos</TabsTrigger>
            <TabsTrigger value="historial">Historial</TabsTrigger>
            <TabsTrigger value="chats">Chats</TabsTrigger>
            <TabsTrigger value="tests">Tests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="favoritos" className="animate-fade-in">
            <Card className="p-5 border-white/20">
              <div className="flex items-center mb-4">
                <BookOpen size={20} className="mr-2 text-white" />
                <h2 className="text-lg font-medium text-white">Ideologías Favoritas</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border border-white/20 rounded-md hover:bg-white/5 cursor-pointer">
                  <span className="text-white">Liberalismo</span>
                  <Button variant="ghost" size="sm">Ver</Button>
                </div>
                <div className="flex justify-between items-center p-3 border border-white/20 rounded-md hover:bg-white/5 cursor-pointer">
                  <span className="text-white">Keynesianismo</span>
                  <Button variant="ghost" size="sm">Ver</Button>
                </div>
              </div>
              
              <p className="text-white/60 text-sm mt-4">
                * Aquí se mostrarán las ideologías que marques como favoritas.
              </p>
            </Card>
          </TabsContent>
          
          <TabsContent value="historial" className="animate-fade-in">
            <Card className="p-5 border-white/20">
              <div className="flex items-center mb-4">
                <History size={20} className="mr-2 text-white" />
                <h2 className="text-lg font-medium text-white">Historial de Exploración</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border border-white/20 rounded-md hover:bg-white/5 cursor-pointer">
                  <div>
                    <span className="block text-white">Marxismo</span>
                    <span className="text-xs text-white/60">Perspectiva: Neutra / Histórica</span>
                  </div>
                  <span className="text-xs text-white/60 flex items-center">
                    <Clock size={14} className="mr-1" />
                    Hace 2 días
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 border border-white/20 rounded-md hover:bg-white/5 cursor-pointer">
                  <div>
                    <span className="block text-white">AnarcoCapitalismo</span>
                    <span className="text-xs text-white/60">Perspectiva: Liberal</span>
                  </div>
                  <span className="text-xs text-white/60 flex items-center">
                    <Clock size={14} className="mr-1" />
                    Hace 1 semana
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="chats" className="animate-fade-in">
            <Card className="p-5 border-white/20">
              <div className="flex items-center mb-4">
                <MessageSquare size={20} className="mr-2 text-white" />
                <h2 className="text-lg font-medium text-white">Chats Recientes</h2>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border border-white/20 rounded-md hover:bg-white/5 cursor-pointer">
                  <div>
                    <span className="block text-white">Adam Smith</span>
                    <span className="text-xs text-white/60">Liberalismo</span>
                  </div>
                  <span className="text-xs text-white/60 flex items-center">
                    <Clock size={14} className="mr-1" />
                    Hace 1 hora
                  </span>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="tests" className="animate-fade-in">
            <Card className="p-5 border-white/20">
              <div className="flex items-center mb-4">
                <TestTube size={20} className="mr-2 text-white" />
                <h2 className="text-lg font-medium text-white">Tests Realizados</h2>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 border border-white/20 rounded-md hover:bg-white/5 cursor-pointer">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">Test de Afinidad Ideológica</span>
                    <span className="text-xs text-white/60 flex items-center">
                      <Clock size={14} className="mr-1" />
                      Hace 1 día
                    </span>
                  </div>
                  <div className="text-sm text-white/80">
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
