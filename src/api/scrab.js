import axios from "axios";

export async function getScrab() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewScrab`);
        return response.data.Scrabs;
}
export async function deleteScrab({ id }) {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteScrab?id=${ id }`);
        return response.data;
}
export async function addScrab({ name, min_cost, max_cost, weight, conducts_electricity_id, two_handed_id, avatar }) {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createScrab`, { name, min_cost, max_cost, weight, conducts_electricity_id, two_handed_id, avatar  }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
}
export async function redactScrab({id, name, min_cost, max_cost, weight, conducts_electricity_id, two_handed_id, avatar}) {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/redactScrab?id=${id}`, { name, min_cost, max_cost, weight, conducts_electricity_id, two_handed_id, avatar }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
}