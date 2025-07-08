import { useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1612831819394-8f3c9d964c01',
    title: 'Sunset Beach',
  },
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Mountain View',
  },
  {
    img: 'https://images.unsplash.com/photo-1527777033102-426b8a1572c2',
    title: 'Forest Road',
  },
  {
    img: 'https://images.unsplash.com/photo-1587502537745-94a6f3b20b8f',
    title: 'City Lights',
  },
  {
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    title: 'Snowy Peak',
  },
  {
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    title: 'Desert Dunes',
  },
];


export default function UserInfoChatDialog({ isOpen, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">User Info</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value="Photos" aria-label="basic tabs example">
    <Tab label="Photos" />
    
  </Tabs>
</Box>
          <ImageList cols={3} rowHeight={164}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
        </div>
      </div>
    </div>
  );
}
