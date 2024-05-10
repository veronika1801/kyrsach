import axios from "axios";

export async function getMonster() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewMonster`);
        return response.data;
    } catch (error) {
        console.error("Error fetching monster:", error);
        throw error;
    }
}