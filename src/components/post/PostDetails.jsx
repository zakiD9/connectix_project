import * as Dialog from "@radix-ui/react-dialog";
import { useCommentStore } from "../../store/commentStore";
import { X } from "lucide-react";
import TopOfPost from "./topofpost";
import PostContent from "./postContent";
import PostActions from "./Comments/PostComment";
import Post from "./post";
import CommentSection from "./Comments/commentSection";
import { useEffect, useState } from "react";
import { getPostById } from "../../services/postService";
import { usePostStore } from "../../store/postStore";

export default function PostDetailsPopup() {
const { isCommentModalOpen, closeCommentModal } = useCommentStore();
 const [postDetails, setPostDetails] = useState(null);
 const{selectedPost} = usePostStore();

useEffect(() => {
    async function fetchPost() {
      if (!selectedPost) return;
      const postId = selectedPost;
      try {
        const response = await getPostById(postId);
        console.log(response.data);
        setPostDetails(response.data);
        console.log("post Details:",postDetails);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPost();
  }, [selectedPost]);

  if (!selectedPost) return null;
  return (
    <Dialog.Root open={isCommentModalOpen} onOpenChange={(open) => {
  if (!open) closeCommentModal();
}}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50" />
        {/* Modal Content */}
        <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[500px] max-h-[80vh] rounded-2xl shadow-xl p-4 overflow-y-auto">
          {/* Close Button */}
          <div>
            <TopOfPost   />
            <PostContent text={postDetails?.title} image={postDetails?.media} />  
            <PostActions/>
            <CommentSection />
            
         </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}