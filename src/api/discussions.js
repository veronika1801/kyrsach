import axios from "axios";
import { ref } from "vue";
export async function getDiscussions() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewForum`);
        return response.data.News;
}

export async function addDiscussions({name, description }) {
        const token = ref(localStorage.getItem('token'));
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/addNew`, { name, description }, {
            headers: {
                Authorization: `Bearer ${token.value}`,
                'Content-Type': 'application/json',
            }
        });
        return response.data;
}
export async function deleteDiscussions({ id }) {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteNews?id=${id}`);
        return response.data;
}
