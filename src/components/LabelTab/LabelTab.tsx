interface LabelTabProps {
    text: string;
    isActive?: boolean;
  }
  
  const LabelTab = ({ text, isActive = false }: LabelTabProps) => {
    return (
      <div className="relative w-fit">
        <div className="flex items-center justify-center px-6 py-4 bg-white shadow rounded">
          <span
            className={`font-bold text-xl uppercase transition-colors ${
              isActive ? 'text-primary-hover' : 'text-gray-600'
            }`}
          >
            {text}
          </span>
        </div>
  
        {isActive && (
          <>
            {/* Línea azul arriba del triángulo */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-hover rounded-b" />
  
            {/* Triángulo */}
            <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary-hover" />
          </>
        )}
      </div>
    );
  };
  
  export default LabelTab;
      