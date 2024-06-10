import axios from "axios";

export async function getItem() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewItem`);
        return response.data.Items;
}
export async function deleteItem({ id }) {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteItem?id=${ id }`);
        return response.data;
}
export async function addItem({ name, type_id, cost, weight,  presence_of_battery_id, conducts_electricity_id, avatar}) {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createItem`, { name, type_id, cost, weight,  presence_of_battery_id,conducts_electricity_id, avatar }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
}
export async function redactItem({id, name, type_id, cost, weight, presence_of_battery_id, conducts_electricity_id, avatar}) {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/redactItem?id=${id}`, { name, type_id, cost, weight, presence_of_battery_id, conducts_electricity_id, avatar }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
}
