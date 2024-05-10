import axios from 'axios';

export async function registerUser({ login, password }) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, { login, password }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        
        if (response.status === 200) {                              

            const token = response.data.token;
            
            localStorage.setItem('token', token);
            return { token, error: null };
            
        } else {
            throw new Error('Ошибка регистрации');
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
                throw new Error('Ошибка валидации полей');
            } else {
                throw new Error('Произошла ошибка при регистрации');
            }
        }
    }
}