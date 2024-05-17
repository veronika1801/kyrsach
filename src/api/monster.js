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
export async function deleteMonster({ id }) {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteMonster?id=${ id }`, {
            
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting from moon:", error);
        throw error;
    }
}
export async function addMonster({ name, healt, damage, quantity, stun_id}) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createMonster`, { name, healt, damage, quantity, stun_id }, {
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
export async function redactMonster({id, name, healt, damage, quantity, stun_id}) {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/redactMonster?id=${id}`, { name, healt, damage, quantity, stun_id }, {
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