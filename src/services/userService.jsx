import axios from 'axios';
const API_URL = 'http://socialmedidfdf.runasp.net/api/users/';
const token = localStorage.getItem('token');
export const getUsers = async()=>{
    try{
        const response = await axios.get(`${API_URL}get-all-for-testing`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
                // ...other headers
            }
        });
        return response.data;
    }catch(error){
        console.error('Error fetching users:', error);
        throw new Error(error.response.data.message || 'Error fetching users');
    }
}

export const getUserInfoById = async(id)=>{
    try{
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}${id}`,{
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
                // ...other headers
            }
        });
        return response.data;
    }catch(error){
        console.error('Error fetching users:', error);
        throw new Error(error.response.data.message || 'Error fetching users');
    }
}


export const getMe= async()=>{
    try{
        const response = await axios.get(`${API_URL}me`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
                // ...other headers
            }
        });
        return response.data;
    }catch(error){
        console.error('Error fetching user data:', error);
        throw new Error(error.response.data.message || 'Error fetching user data');
    }
}
export const updateProfileImage = async (file) => {
  const formData = new FormData();
  formData.append('profileImage', file);

  try {
    const response = await axios.patch(
      `${API_URL}update-profile-image`,
      formData,
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    console.log('Profile image updated successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating profile image:', error);
    throw new Error(error.response?.data?.message || 'Error updating profile image');
  }
};
export const updateName = async (nameData) => {
    try {
        const response = await axios.patch(`${API_URL}update-name`, nameData, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating name:', error);
        throw new Error(error.response?.data?.message || 'Error updating name');
    }
}
export const updateBio = async (bio) => {
    try {
        const response = await axios.patch(`${API_URL}update-bio`, {bio}, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        console.log('Bio updated successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating bio:', error);
        throw new Error(error.response?.data?.message || 'Error updating bio');
    }
}
export const updatePassword = async (passwordData) => {
    try {
        const response = await axios.patch(`${API_URL}me/change-password`, passwordData, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating password:', error);
        throw new Error(error.response?.data?.message || 'Error updating password');
    }
}
export const updateBirthdate = async (birthdateData) => {
    try {
        const response = await axios.post(`${API_URL}update-birthdate`, birthdateData, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating birthdate:', error);
        throw new Error(error.response?.data?.message || 'Error updating birthdate');
    }
}
export const updateEmailadrress =async (NewEmail)=>{
    try {
        const response = await axios.patch(`${API_URL}update-email`, {NewEmail}, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating birthdate:', error);
        throw new Error(error.response?.data?.message || 'Error updating birthdate');
    }
}
export const searchUsers= async(searchTerm, page = 1, pageSize = 10) =>{
    try{
        const response = await axios.get(`http://socialmedidfdf.runasp.net/api/search/users`,{ params: {
      searchTerm,
      page,
      pageSize,
    },
  });
        return response.data;
    }catch (error){
        console.log(error);
    }
}

export const follow =async (id)=>{
    try {
        const response = await axios.post(`${API_URL}${id}/follow`, {id}, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error following:', error);
        throw new Error(error.response?.data?.message || 'error follow');
    }
}

export const unfollow =async (id)=>{
    try {
        const response = await axios.patch(`${API_URL}${id}/unfollow`, {id}, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error unfollowing:', error);
        throw new Error(error.response?.data?.message || 'error unfollow');
    }
}

export const getMyFollowers= async()=>{
    try{
        const response = await axios.get(`${API_URL}me/followers`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
                // ...other headers
            }
        });
        return response.data;
    }catch(error){
        console.error('Error fetching follow data:', error);
        throw new Error(error.response.data.message || 'Error fetching follow data');
    }
}

export const getMyFollowing= async()=>{
    try{
        const response = await axios.get(`${API_URL}me/following`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
                // ...other headers
            }
        });
        return response.data;
    }catch(error){
        console.error('Error fetching following data:', error);
        throw new Error(error.response.data.message || 'Error fetching following data');
    }
}
export const getuserFollowers= async(id)=>{
    try{
        const response = await axios.get(`${API_URL}${id}/followers`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
                // ...other headers
            }
        });
        return response.data;
    }catch(error){
        console.error('Error fetching follow data:', error);
        throw new Error(error.response.data.message || 'Error fetching follow data');
    }
}

export const getuserFollowing= async(id)=>{
    try{
        const response = await axios.get(`${API_URL}${id}/following`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
                // ...other headers
            }
        });
        return response.data;
    }catch(error){
        console.error('Error fetching following data:', error);
        throw new Error(error.response.data.message || 'Error fetching following data');
    }
}