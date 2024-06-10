import axios from "axios";

export async function getMonster() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewMonster`);
        return response.data.Monsters;
}
export async function deleteMonster({ id }) {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteMonster?id=${ id }`);
        return response.data;
}
export async function addMonster({ name, healt, damage, quantity, stun_id, avatar}) {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createMonster`, {name, healt, damage, quantity, stun_id, avatar},{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
}
export async function redactMonster({id, name, healt, damage, quantity, stun_id, avatar}) {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/redactMonster?id=${id}`, { name, healt, damage, quantity, stun_id, avatar }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
}
export async function searchMonster(query) {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/searchMonster?search=${query}`);
        return response.data.Monsters;
}