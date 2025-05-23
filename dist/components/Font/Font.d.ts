interface HeadingProps {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    children: React.ReactNode;
    className?: string;
}
declare const Heading: ({ as, children, className }: HeadingProps) => import("react/jsx-runtime").JSX.Element;
export default Heading;
