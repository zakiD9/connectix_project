import axios from 'axios';
const API_URL = 'http://socialmedidfdf.runasp.net/api/comments/';

export async function getCommentsByPostId(postId) {
    try{
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://socialmedidfdf.runasp.net/api/posts/${postId}/comments`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        return response.data;
    }catch(error){
        console.log(error);
    }
  
}

export async function postComment(postId, comment) {
  try {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('postId', postId);
    formData.append('content', comment);

    const response = await axios.post(`${API_URL}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
export async function deleteComment(commentId) {
    try{
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}${commentId}`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        console.log("success.");
        return response;
    }catch(error){
        console.log(error);
    }
  
}
export async function PostreplyComment(id,content,postId) {
    try{
        const token = localStorage.getItem('token');
        const body = {
            id:id,
      content: content,
      postId: postId,
      file: null
    };
        const response = await axios.post(`${API_URL}${id}/reply`,body, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        console.log("success.");
        return response;
    }catch(error){
        console.log(error);
    }
  
}

export const likecomment = async (id)=>{
try{
const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}${id}/like`,{id},{
        headers:{
            Authorization:token ? `Bearer ${token}`:"",
        }
    })
    console.log("liked success:",response);
    return response;
}catch(error){
        console.log(error);
}
}

export const unlikecomment = async (id)=>{
try{
const token = localStorage.getItem('token');
    const response = await axios.delete(`${API_URL}${id}/unlike`,{id},{
        headers:{
            Authorization:token ? `Bearer ${token}`:"",
        }
    })
    console.log("unliked success:",response);
    return response;
}catch(error){
        console.log(error);
}
}