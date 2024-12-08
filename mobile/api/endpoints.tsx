const BASE_URL = '';

export const ENDPOINTS = {
    LOGIN: `${BASE_URL}/api/auth/login`,
    REGISTER: `${BASE_URL}/api/auth/register`,
    UPDATE_JAVA_DATA_TYPES_LT: `${BASE_URL}/api/java/datatypes/lessons/update`,
    GET_JAVA_DATA_TYPES_LT: `${BASE_URL}/api/java/datatypes/lessons/get`,
    UPDATE_USERNAME: `${BASE_URL}/api/auth/update-username`,
    UPDATE_EMAIL: `${BASE_URL}/api/auth/update-email`,
    UPDATE_PASSWORD: `${BASE_URL}/api/auth/update-password`,
    DELETE_ACCOUNT: `${BASE_URL}/api/auth/delete`
  }