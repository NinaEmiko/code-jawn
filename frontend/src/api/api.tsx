import axios from 'axios';
import { ENDPOINTS } from '../helpers/endpoints'

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

export const register = async (username: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${ENDPOINTS.REGISTER}`, {
            username: username,
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
};

export const updateJavaDataTypesLT = async (userId: number, lesson: string) => {
    try {
        const response = await axios.put(`${ENDPOINTS.UPDATE_JAVA_DATA_TYPES_LT}`, {
            userId: userId,
            lesson: lesson
        });
        return response.data;
    } catch (error) {
      console.error('Error updating javaDataTypesLT:', error);
      throw error;
    }
};