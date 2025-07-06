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
import { deletePost } from "../services/postService";
import { usePostStore } from "../store/postStore";

const ListMenu = ({SelectedPostList}) => {
  const{setOnEdit}=usePostStore();
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
  return (
    <Menu className="bg-black">
      <MenuButton
        as="button"
        className="cursor-pointer"
      >
       <EllipsisHorizontalIcon className="w-6 h-6 text-gray-400" />
      </MenuButton>
      
        <MenuList>
          <MenuItem onClick={setOnEdit(true)}>Edit</MenuItem>
          <MenuItem onClick={onDelete}>Delete</MenuItem>
        </MenuList>
    </Menu>
  );
};

export default ListMenu;
