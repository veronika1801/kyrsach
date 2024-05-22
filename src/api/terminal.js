import axios from "axios";

export async function getTerminal() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewTerminal`);
        return response.data;

}
export async function deleteTerminal({ id }) {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteTerminal?id=${ id }`, {
          
        });
        return response.data;
}
export async function addTerminal({title, description }) {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createTerminal`, {title, description }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
}
export async function redactTerminal({id, title, description}) {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/redactTerminal?id=${id}`, { title, description }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
}