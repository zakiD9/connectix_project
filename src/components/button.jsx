const Button = ({ text, loading = false, disabled, ...props }) => {
  return (
    <button
      className={`flex items-center justify-center text-white px-4 py-3 rounded-full transition-all duration-200 ${
        loading || disabled
          ? "bg-[#64D2FF]/70 cursor-not-allowed"
          : "bg-[#64D2FF] hover:bg-[#4dbff0]"
      }`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
          {text}ing...
        </span>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
