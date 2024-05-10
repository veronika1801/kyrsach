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
            
            localStorage.setItem('token', token);
            return { token, error: null };
        } else {
            const errorMessage = response.data && response.data.message ? response.data.message : 'Authentication failed';
            return { token: null, error: errorMessage };
        }
    } catch (error) {
        return { token: null, error: "failed Authentication" };
    }
}

