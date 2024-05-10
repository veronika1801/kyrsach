import axios from "axios";

export async function getMoon() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewMoon`);
        return response.data;
    } catch (error) {
        console.error("Error fetching moon:", error);
        throw error;
    }
}