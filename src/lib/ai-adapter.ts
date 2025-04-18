// Adaptador simple para AI SDK en aplicaciones SPA

export function makeApiPath(path: string): string {
  // Asegúrate de que el path comience con /
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  // Obtén la URL base de la aplicación
  const baseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
  
  // Combina la URL base con el path
  return `${baseUrl}${formattedPath}`;
} 