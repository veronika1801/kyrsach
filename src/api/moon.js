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
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/deleteMoon`, { id }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting from moon:", error);
        throw error;
    }
}
export async function addMoon({ name, tier_id, cost, number_of_items, weather }) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createMoon`, { name, tier_id, cost, number_of_items, weather  }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting from moon:", error);
        throw error;
    }
}