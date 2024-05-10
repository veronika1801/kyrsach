import axios from "axios";
import { ref } from "vue";

const token = ref(localStorage.getItem('token'));

export const logout = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
            headers: {
                Authorization: `Bearer ${token.value}`
            }
        });
        clearToken();

        return response.data.message;
    } catch (error) {
        
        clearToken();
        throw error;
    }
};

const clearToken = () => {
    token.value = null;
    localStorage.removeItem('token');
};

export default {
    logout
};