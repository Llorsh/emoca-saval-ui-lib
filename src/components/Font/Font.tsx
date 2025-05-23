interface HeadingProps {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    children: React.ReactNode;
    className?: string;
  }
  
  const Heading = ({ as, children, className = '' }: HeadingProps) => {
    const Tag = as;
  
    return <Tag className={className}>{children}</Tag>;
  };
  
  export default Heading;
  