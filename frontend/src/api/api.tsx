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

export const verify = async (email: string, code: string) => {
    try {
        const response = await axios.post(`${ENDPOINTS.VERIFY}`, {
            email: email,
            code: code
        });
        return response.data;
    } catch (error) {
      console.error('Error verifying user:', error);
      throw error;
    }
};

export const refreshVerificationCode = async (email: string) => {
    try {
        const response = await axios.post(`${ENDPOINTS.REFRESH_VERIFY}`, {
            email: email,
            code: ""
        });
        return response.data;
    } catch (error) {
      console.error('Error refreshing verification code:', error);
      throw error;
    }
};

export const getJavaDataTypesLT = async (userId: number) => {
    try {
        const response = await axios.get(`${ENDPOINTS.GET_JAVA_DATA_TYPES_LT}/${userId}`);
        return response.data;
    } catch (error) {
      console.error('Error retrieving javaDataTypesLT:', error);
      throw error;
    }
};

export const getLT = async (userId: number) => {
    try {
        const response = await axios.get(`${ENDPOINTS.GET_LT}/${userId}`);
        return response.data;
    } catch (error) {
      console.error('Error retrieving javaLT:', error);
      throw error;
    }
};

export const getJavaVariablesLT = async (userId: number) => {
    try {
        const response = await axios.get(`${ENDPOINTS.GET_JAVA_VARIABLES_LT}/${userId}`);
        return response.data;
    } catch (error) {
      console.error('Error retrieving javaVariablesLT:', error);
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

export const updateUsername = async (userId: number, newUsername: string) => {
    try {
        const response = await axios.put(`${ENDPOINTS.UPDATE_USERNAME}`, {
            id: userId,
            newUsername: newUsername
        });
        return response.data;
    } catch (error) {
      console.error('Error updating username:', error);
      throw error;
    }
};

export const updateUserEmail = async (userId: number, newEmail: string) => {
    try {
        const response = await axios.put(`${ENDPOINTS.UPDATE_EMAIL}`, {
            id: userId,
            newEmail: newEmail
        });
        return response.data;
    } catch (error) {
      console.error('Error updating email:', error);
      throw error;
    }
};

export const updateUserPassword = async (userId: number, oldPassword: string, newPassword: string) => {
    try {
        const response = await axios.put(`${ENDPOINTS.UPDATE_PASSWORD}`, {
            id: userId,
            oldPassword: oldPassword,
            newPassword: newPassword
        });
        return response.data;
    } catch (error) {
      console.error('Error updating password:', error);
      throw error;
    }
};

export const deleteAccount = async (userId: number) => {
    try {
        const response = await axios.delete(`${ENDPOINTS.DELETE_ACCOUNT}/${userId}`);
        return response.data;
    } catch (error) {
      console.error('Error deleting account:', error);
      throw error;
    }
};