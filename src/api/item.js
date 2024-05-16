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
export async function deleteItem({ id }) {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteItem?id=${ id }`, {
           
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting from item:", error);
        throw error;
    }
}
export async function addItem({ name, type_id, cost, weight,  presence_of_battery_id, conducts_electricity_id }) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createItem`, { name, type_id, cost, weight,  presence_of_battery_id,conducts_electricity_id,  }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting from item:", error);
        throw error;
    }
}