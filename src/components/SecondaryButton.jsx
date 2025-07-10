export default function SecondaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-gray-100 px-4 py-3 text-primary rounded-full hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
