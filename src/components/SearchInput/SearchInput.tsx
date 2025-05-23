import { Dispatch, SetStateAction, useState } from "react";
import SearchSVG from "../Svg/Search";
import XSVG from "../Svg/X";

export interface SearchInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const SearchInput = ({
  value,
  setValue,
}: SearchInputProps) => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-100 p-6 rounded-lg">
      {/* Botón flotante lupa */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-sky-500 text-white p-4 rounded-full shadow-lg hover:bg-sky-600"
        >
          <SearchSVG />
        </button>
      )}

      {/* Input desplegable */}
      {isOpen && (
        <div className="mt-4 flex items-center border border-sky-400 rounded-full px-4 py-2 bg-white shadow-md w-[320px] transition-all duration-300">
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          />
          {value ? (
            <button
              onClick={() => {
                setValue("");
                setIsOpen(false);
              }}
              className="text-white bg-sky-400 rounded-full p-2 ml-2 hover:bg-sky-500"
            >
              <XSVG size={16} />
            </button>
          ) : (
            <button className="text-white bg-sky-400 rounded-full p-2 ml-2 hover:bg-sky-500">
              <SearchSVG size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
