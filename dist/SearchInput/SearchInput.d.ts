import { Dispatch, SetStateAction } from "react";
export interface SearchInputProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}
declare const SearchInput: ({ value, setValue, }: SearchInputProps) => import("react/jsx-runtime").JSX.Element;
export default SearchInput;
