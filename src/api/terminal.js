import axios from "axios";

export async function getTerminal() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewTerminal`);
        return response.data;
    } catch (error) {
        console.error("Error fetching terminal:", error);
        throw error;
    }
}