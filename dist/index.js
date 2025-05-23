// Importar estilos globales
import './assets/css/globals.css';
// Re-exportar componentes
export * from './components/Button';
export * from './components/Font';
export * from './components/Header';
export * from './components/Input/Checkbox';
// Radio y Page no se exportan actualmente
// export * from './components/Input/Radio';
// export * from './components/Page';
export * from './components/Input/ToggleSwitch';
export * from './components/Label';
export * from './components/LabelTab';
export * from './components/SearchInput';
// Re-exportar iconos con sufijo 'Icon'
export { default as XIcon } from './icons/X';
export { default as CheckIcon } from './icons/Check';
export { default as LabelIcon } from './icons/Label';
export { default as SearchIcon } from './icons/Search';
// Exportar iconos originales sin sufijo para compatibilidad
export { default as X } from './icons/X';
export { default as Check } from './icons/Check';
export { default as Search } from './icons/Search';
// No exportar Label aquí para evitar conflicto con el componente Label
