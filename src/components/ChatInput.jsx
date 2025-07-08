import { FiSmile, FiImage, FiMic } from "react-icons/fi";

const ChatRoundedInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}) => (
  <div className="flex flex-col w-full">
    {label && <label className="mb-1">{label}</label>}
    <div className="relative w-full">
      <input
        className={`border pr-28 pl-4 py-2 w-full rounded-full hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition text-sm ${
          error ? "border-red-500" : ""
        }`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      <div className="absolute inset-y-0 right-3 flex items-center gap-2">
        <button
          type="button"
          className="p-1 hover:text-primary text-gray-500"
          title="Emoji"
        >
          <FiSmile className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="p-1 hover:text-primary text-gray-500"
          title="Photo"
        >
          <FiImage className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="p-1 hover:text-primary text-gray-500"
          title="Voice"
        >
          <FiMic className="w-5 h-5" />
        </button>
      </div>
    </div>

    {/* Error message */}
    {error && (
      <div className="flex items-center mt-1 text-red-500 text-sm">
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
        {error}
      </div>
    )}
  </div>
);

export default ChatRoundedInput;
