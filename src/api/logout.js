import axios from "axios";
import { ref } from "vue";

const token = ref(localStorage.getItem('token'));
const role_id = ref(localStorage.getItem('role_id'));
export const logout = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
            headers: {
                Authorization: `Bearer ${token.value}`,
                Authorization: `Bearer ${role_id.value}`
            }
        });
        clearToken();
        
        return response.data.message;
};

const clearToken = () => {
    role_id.value = null;
    token.value = null;
    localStorage.removeItem('token');
    localStorage.removeItem('role_id');
};

export default {
    logout
};