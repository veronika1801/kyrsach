import axios from "axios";

export async function getMoon() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewMoon`,{
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching moon:", error);
        throw error;
    }
}
export async function deleteMoon({ id }) {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteMoons`, {id}, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting from moon:", error);
        throw error;
    }
}