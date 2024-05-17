import axios from "axios";

export async function getTerminal() {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewTerminal`);
        return response.data;
    } catch (error) {
        console.error("Error fetching terminal:", error);
        throw error;
    }
}
export async function deleteTerminal({ id }) {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteTerminal?id=${ id }`, {
          
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting from scrab:", error);
        throw error;
    }
}
export async function addTerminal({title, description }) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/createTerminal`, {title, description }, {
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
export async function redactTerminal({id, title, description}) {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/redactTerminal?id=${id}`, { title, description }, {
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