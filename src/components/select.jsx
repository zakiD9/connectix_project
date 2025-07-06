const Select = ({ label, options, value, onChange }) => (
  <div className="flex flex-col">
    <label className="mb-1">{label}</label>
    <select
      className="border p-3 rounded-lg hover:border-black focus:outline-none"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;