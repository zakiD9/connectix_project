    const Button = ({ text, ...props }) => (
  <button className="text-white px-4 bg-[#64D2FF] py-3 rounded-full " {...props}>
    {text}
  </button>
);

export default Button;
