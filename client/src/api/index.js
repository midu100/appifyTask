import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:7000',
    withCredentials: true, // For sending cookies
    headers: {
        "Content-Type": "application/json",
    }
});

/* =========================
   API SERVICES
========================= */
export const authServices = {
    login: async (loginData) => {
        const res = await api.post('/auth/signin', loginData);
        return res.data;
    },
    signup: async (signupData) => {
        const res = await api.post('/auth/signup', signupData);
        return res.data;
    },
    getProfile: async () => {
        const res = await api.get('/auth/getProfile');
        return res.data;
    }
};

export const postServices = {
    createPost: async (postData) => {
        // since create post uses upload.single('image'), we might need to send FormData. But we will just keep the parameter postData where user can send FormData.
        const res = await api.post('/posts/create', postData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return res.data;
    },
    getAllPosts: async () => {
        const res = await api.get('/posts/allposts');
        return res.data;
    }
};

export default api;
