const GoogleButton = ({ onClick,label }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex items-center justify-center w-full bg-[#f5f8ff] text-black px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:bg-gray-100 transition"
  >
    <img
      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
      alt="Google"
      className="w-6 h-6 mr-2"
    />
    {label}
  </button>
);

export default GoogleButton;