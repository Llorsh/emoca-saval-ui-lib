// Importar estilos globales
import './assets/css/globals.css';

// Re-exportar módulos principales
import * as Components from './components';
import * as Icons from './icons';

// Exportar todo para mantener compatibilidad con versiones anteriores
export * from './components';
export * from './icons';

// Exportar módulos como namespaces
export { Components, Icons };
