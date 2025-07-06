function NoBgButton({ children,onClick }) {
  return (
    <div onClick={onClick}><a href="#" className="text-primary   text-sm font-medium hover:underline">{children}</a></div>
    
  );
}
export default NoBgButton;