import axios from "axios";

export async function getScrab() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewScrab`);
        return response.data;
    } catch (error) {
        console.error("Error fetching scrab:", error);
        throw error;
    }
}
export async function deleteScrab({ id }) {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteScrab?id=${ id }`, {
           
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting from scrab:", error);
        throw error;
    }
}
export async function addScrab({ name, min_cost, max_cost, weight, conducts_electricity_id, two_handed_id }) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createScrab`, { name, min_cost, max_cost, weight, conducts_electricity_id, two_handed_id  }, {
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
export async function redactScrab({id, name, min_cost, max_cost, weight, conducts_electricity_id, two_handed_id}) {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/redactScrab?id=${id}`, { name, min_cost, max_cost, weight, conducts_electricity_id, two_handed_id }, {
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