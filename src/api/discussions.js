import axios from "axios";
import { ref } from "vue";
export async function getDiscussions() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewForum`);
        return response.data;
    } catch (error) {
        console.error("Error fetching new:", error);
        throw error;
    }
}


export async function addDiscussions({name, description }) {
    try {
        const token = ref(localStorage.getItem('token'));
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/addNew`, { name, description }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token.value}`,
               
            }
        });
        console.log(token.value)
        return response.data;
    } catch (error) {
        console.error("Error deleting from moon:", error);
        throw error;
    }
}