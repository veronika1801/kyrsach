import axios from "axios";
import { ref } from "vue";

const token = ref(localStorage.getItem('token'));

export const logout = async () => {
    const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        clearToken();
        return response.data.message;
};

const clearToken = () => {
    token.value = null;
    localStorage.removeItem('token');
};

export default {
    logout
};