import React, { useState } from "react";
import Picker from "@emoji-mart/react";
import data from '@emoji-mart/data';

const EmojiInput = ({setText,text}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleEmoji = (emoji) => {
    setText(text+emoji.native);
  };

  return (
    <div className="relative">

        <button onClick={() => setShowPicker(!showPicker)} className="p-2 rounded-full border hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="9" cy="10" r="1" fill="currentColor"/>
                <circle cx="15" cy="10" r="1" fill="currentColor"/>
                <path d="M9 15c.667.667 1.333 1 2 1s1.333-.333 2-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
                  </button>

      {showPicker && (
        <div className="absolute z-50">
          <Picker data={data} onEmojiSelect={handleEmoji} />

        </div>
      )}
    </div>
  );
};

export default EmojiInput;
