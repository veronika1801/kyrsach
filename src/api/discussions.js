import axios from "axios";
import { ref } from "vue";
export async function getDiscussions() {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/viewForum`);
        return response.data;
}


export async function addDiscussions({name, description }) {
        const token = ref(localStorage.getItem('token'));
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/addNew`, { name, description }, {
            headers: {
                
                Authorization: `Bearer ${token.value}`,
                'Content-Type': 'application/json',
               
            }
            
        });
        
        return response.data;
}
export async function deleteDiscussions({ id }) {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteNews?id=${id}`, {
           
        });
        return response.data;
}
// export async function redactDiscussions({id, name, user_id}) {
//     try {
//         const response = await axios.put(`${import.meta.env.VITE_API_URL}/redactNews?id=${id}`, { name, user_id }, {
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error("Error deleting from moon:", error);
//         throw error;
//     }
// }