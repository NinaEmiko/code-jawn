const BASE_URL = import.meta.env.VITE_REACT_APP_URL;

export const ENDPOINTS = {
  LOGIN: `${BASE_URL}/api/auth/login`,
  REGISTER: `${BASE_URL}/api/auth/register`,
  UPDATE_JAVA_DATA_TYPES_LT: `${BASE_URL}/api/java/datatypes/lessons/update`,
  GET_JAVA_DATA_TYPES_LT: `${BASE_URL}/api/java/datatypes/lessons/get`
}