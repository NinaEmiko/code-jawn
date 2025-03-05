const BASE_URL = import.meta.env.VITE_REACT_APP_URL;

export const ENDPOINTS = {
  LOGIN: `${BASE_URL}/api/auth/login`,
  REGISTER: `${BASE_URL}/api/auth/register`,
  VERIFY_ACCOUNT_REGISTRATION: `${BASE_URL}/api/auth/verify-account-registration`,
  VERIFY_EMAIL_UPDATED: `${BASE_URL}/api/auth/verify-email-updated`,
  REFRESH_VERIFY: `${BASE_URL}/api/auth/verify-refresh`,
  UPDATE_JAVA_DATA_TYPES_LT: `${BASE_URL}/api/java/datatypes/lessons/update`,
  GET_JAVA_DATA_TYPES_LT: `${BASE_URL}/api/java/datatypes/lessons/get`,
  GET_LT: `${BASE_URL}/api/lessons/get`,
  GET_JAVA_VARIABLES_LT: `${BASE_URL}/api/java/variables/lessons/get`,
  UPDATE_USERNAME: `${BASE_URL}/api/auth/update-username`,
  UPDATE_EMAIL: `${BASE_URL}/api/auth/update-email`,
  UPDATE_PASSWORD: `${BASE_URL}/api/auth/update-password`,
  CANCEL_VERIFICATION_CODE: `${BASE_URL}/api/auth/verify-cancel`,
  DELETE_ACCOUNT: `${BASE_URL}/api/auth/delete`
}