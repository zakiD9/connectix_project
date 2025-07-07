import { useState } from "react";
import { updatePost } from "../services/postService";
import { usePostStore } from "../store/postStore";
import Button from "./button";

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
<div className="bg-white rounded-lg p-4  space-y-2">
      <textarea
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        rows={4}
      />

      <div className="flex justify-end gap-2">
        <Button
          onClick={()=>{setOnEdit(false)}}
          text="Cancel"
          className="px-4 py-2 border rounded-full "
        >
          Cancel
        </Button>
        <Button
          onClick={handleOnEdit}
          text="Save"
          
        >
          Save
        </Button>
      </div>
    </div>
    )
}