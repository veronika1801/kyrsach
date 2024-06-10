import axios from 'axios';

export async function registerUser({ login, password }) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, { login, password }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });                    
            const token = response.data.token;
            const role_id = response.data.user.role_id;
            localStorage.setItem('role_id', role_id);
            localStorage.setItem('token', token);
            return { token, error: null };
        }
     catch (error) {
        return { token: null, error: "такой пользователь уже создан" };
    }
}