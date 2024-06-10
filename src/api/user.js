import axios from "axios";
import { ref } from "vue";

export async function getUser() {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile?id=${token}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.user;
}

const token = ref(localStorage.getItem('token'));
const role_id = ref(localStorage.getItem('role_id'));

export async function deleteUser() {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteUser`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    clearToken();
    return response.data.message;
}

const clearToken = () => {
    role_id.value = null;
    token.value = null;
    localStorage.removeItem('token');
    localStorage.removeItem('role_id');
};


