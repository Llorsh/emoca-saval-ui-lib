import './header.css';
type User = {
    name: string;
};
export interface HeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}
declare const Header: ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export default Header;
//# sourceMappingURL=Header.d.ts.map