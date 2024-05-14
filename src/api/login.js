import axios from 'axios';

export async function log({login, password}) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { login, password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
       
        if (response.status === 200 && response.data && response.data.token) {
            const token = response.data.token;
            const role_id = response.data.user.role_id;
            localStorage.setItem('token', token);
            localStorage.setItem('role_id', role_id);
            return { token,role_id, error: null };
        } else {
            const errorMessage = response.data && response.data.message ? response.data.message : 'Authentication failed';
            return { token: null, error: errorMessage };
        }
    } catch (error) {
        return { token: null, error: "failed Authentication" };
    }
}

