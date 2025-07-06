import Button from '../button';
import { useRef } from 'react';
import { usePostStore } from '../../store/postStore';
import EmojiInput from '../EmojiPicker';

export default function PostBox() {
  const { text, setText, createPost, setImages, images } = usePostStore();
const fileInputRef = useRef(null);
  const handlePost = async () => {
    await createPost();
  }
  const handleImageButtonClick = () => {
    fileInputRef.current.click();
  }
  const handleFilesChange = (e) => {
    setImages(Array.from(e.target.files));
  };
  return (
    <div className="w-full rounded-2xl bg-white shadow p-4 flex flex-col">
      <textarea
        className="resize-none w-full h-20 p-2 border-none outline-none text-gray-800 placeholder:text-gray-400"
        placeholder="What's on your mind right now?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {images && images.length > 0 && (
        <div className="flex flex-wrap gap-2 my-2">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={URL.createObjectURL(img)}
              alt={`Preview ${idx + 1}`}
              className="w-32 h-32 object-contain rounded"
            />
          ))}
        </div>
      )}
      <input
  type="file"
  accept="image/*"
  ref={fileInputRef}
        style={{ display: 'none' }}
  onChange={handleFilesChange}
/>
      <div className="flex items-center justify-end mt-1">
        <div className="flex items-center gap-2 text-gray-500">
          <EmojiInput text={text} setText={setText} />
          <button onClick={handleImageButtonClick}  className="p-2 rounded-full border hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <Button onClick={handlePost} text="Post" />
        </div>
        
      </div>
    </div>
  );
}
