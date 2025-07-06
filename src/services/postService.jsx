import axios from 'axios';
const API_URL = 'http://socialmedidfdf.runasp.net/api/posts/';
const token = localStorage.getItem('token');
//create post function 

export const createPost = async (postData)=>{
    try{
        const response = await axios.post(`${API_URL}`, postData, {
            headers: {
  Authorization: token ? `Bearer ${token}` : "",
  // ...other headers
}
        });
        return response;
    }catch(error){
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Error creating post');
        }
        console.error('Error creating post:', error);
    }
}

export const getPosts = async()=>{
    try{
        const response = await axios.get(`${API_URL}`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
                // ...other headers
            }
        });
        return response.data;
    }catch(error){
        console.error('Error fetching posts:', error);
        throw new Error(error.response.data.message || 'Error fetching posts');
    }
}
export const getPostById = async (postId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}${postId}`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        console.log("post by id:",response);
        return response;
    } catch (error) {
        console.error('Error fetching post:', error);
        throw new Error(error.response?.data?.message || 'Error fetching post');
    }
};
export const deletePost = async (postId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${API_URL}${postId}`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw new Error(error.response?.data?.message || 'Error deleting post');
    }
};
export const updatePost = async (postId, text) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.patch(`${API_URL}${postId}?text=${encodeURIComponent(text)}`,
            null, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating post:', error);
        throw new Error(error.response?.data?.message || 'Error updating post');
    }
};
export const getMyPosts =async ()=>{
    try{
        const token = localStorage.getItem('token');
    const response = await axios.get(`http://socialmedidfdf.runasp.net/api/users/me/posts`,{
        headers:{
            Authorization:token ? `Bearer ${token}`:"",
        }
    })
    return response.data;
    }catch(error){
        console.log(error);
    }
    

}

export const like = async (postId)=>{
try{
const token = localStorage.getItem('token');
    const response = await axios.post(`http://socialmedidfdf.runasp.net/api/posts/${postId}/like`,{postId},{
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

export const unlike = async (postId)=>{
try{
const token = localStorage.getItem('token');
    const response = await axios.delete(`http://socialmedidfdf.runasp.net/api/posts/${postId}/unlike`,{
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

export const getUserPosts =async (userId)=>{
    try{
        const token = localStorage.getItem('token');
    const response = await axios.get(`http://socialmedidfdf.runasp.net/api/users/${userId}/posts`,{
        headers:{
            Authorization:token ? `Bearer ${token}`:"",
        }
    })
    return response.data;
    }catch(error){
        console.log(error);
    }
    

}