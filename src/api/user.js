import axios from "axios";

export async function getUser() {
    try {
        const token = localStorage.getItem('token');
        
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
                

            }
            
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
   
}




