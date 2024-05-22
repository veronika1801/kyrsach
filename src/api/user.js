import axios from "axios";

export async function getUser() {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile?id=${token}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            
        });
        return response.data.user;
}
// export async function deleteUser({ id }) {
//     const response = await axios.delete(`${import.meta.env.VITE_API_URL}/deleteMonster?id=${ id }`, {
        
//     });
//     return response.data;
// }



