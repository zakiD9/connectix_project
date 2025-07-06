import { useState } from "react";
import { updatePost } from "../services/postService";
import { usePostStore } from "../store/postStore";

export default function EditPostArea({text}){
    const{setOnEdit,SelectedPostList}=usePostStore();
    const [editedText,setEditedText]=useState(text);
 const handleOnEdit = async()=>{
  try{
    const text=editedText;
    const postId=SelectedPostList;
    const response = updatePost(postId,text);
    setOnEdit(false);
    return response
  }catch(error){
    console.log(error);
  }
}
    return(
<div className="bg-white border rounded-lg p-4 shadow space-y-2">
      <textarea
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
        rows={4}
      />

      <div className="flex justify-end gap-2">
        <button
          onClick={()=>{setOnEdit(false)}}
          className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={handleOnEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
    )
}