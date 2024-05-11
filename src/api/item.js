import axios from "axios";

export async function getItem() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewItem`);
        return response.data;
    } catch (error) {
        console.error("Error fetching item:", error);
        throw error;
    }
}