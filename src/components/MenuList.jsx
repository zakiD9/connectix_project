import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Portal,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { deletePost, updatePost } from "../services/postService";

const ListMenu = ({SelectedPostList}) => {
    const onDelete = async()=>{
  try{
    const postId=SelectedPostList
    const response = deletePost(postId);
    console.log("success");
    return response
  }catch(error){
    console.log(error);
  }
}
const onEdit = async()=>{
  try{
    const text="hhhhh";
    const postId=SelectedPostList;
    const response = updatePost(postId,text);
    return response
  }catch(error){
    console.log(error);
  }
}
  return (
    <Menu className="bg-black">
      <MenuButton
        as="button"
        className="cursor-pointer"
      >
       <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400" />
      </MenuButton>
      
        <MenuList>
          <MenuItem onClick={onEdit}>Edit</MenuItem>
          <MenuItem onClick={onDelete}>Delete</MenuItem>
        </MenuList>
    </Menu>
  );
};

export default ListMenu;
