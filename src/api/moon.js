import axios from "axios";

export async function getMoon() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewMoon`);
        return response.data.Moons;
}
export async function deleteMoon({ id }) {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteMoon?id=${id}`);
        return response.data;
}
export async function addMoon({ name, tier_id, cost, number_of_items, weather, avatar }) {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createMoon`, { name, tier_id, cost, number_of_items, weather, avatar  }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
}
export async function redactMoon({id, name, tier_id, cost, number_of_items, weather, avatar}) {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/redactMoon?id=${id}`, { name, tier_id, cost, number_of_items, weather, avatar }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
}