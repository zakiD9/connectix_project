import { useState, useRef, useEffect } from "react";

const MenuList = ({ trigger, items = [], position = "right-0" }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* Trigger button (e.g. 3 dots) */}
      <button onClick={() => setOpen((prev) => !prev)}>{trigger}</button>

      {/* Dropdown menu */}
      {open && (
        <div
          className={`absolute z-50 mt-2 bg-white border rounded-md shadow-md w-40 ${position}`}
        >
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                item.onClick();
                setOpen(false); // close on action
              }}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuList;
