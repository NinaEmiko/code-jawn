import axios from 'axios';
import { ENDPOINTS } from './endpoints'

const API_URL = '';

export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${ENDPOINTS.LOGIN}`, {
            username: username,
            password: password
        });
        return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
};