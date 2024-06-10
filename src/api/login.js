import axios from 'axios';

export async function log({login, password}) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { login, password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
            const token = response.data.token;
            const role_id = response.data.user.role_id;
            localStorage.setItem('token', token);
            localStorage.setItem('role_id', role_id);
            return { token,role_id, error: null };
        
    } catch (error) {
        return { token: null, error: " неправильный логин и/или пароль" };
    }
}

