const Input = ({ label, type, value, onChange,placeholder,error }) => (
  <div className="flex flex-col ">
    <label className="mb-1">{label}</label>
    <input
      className={`border p-3 rounded-lg hover:border-primary  focus:outline-none focus:ring-2 focus:ring-primary transition ${error ? 'border-red-500' : ''}`}
        placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
    {error && (
      <div className="flex items-center mt-1 text-red-500 text-sm">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
        </svg>
        {error}
      </div>
    )}
  </div>
);

export default Input;
