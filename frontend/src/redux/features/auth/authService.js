import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/users/`;

// Validate email
export const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

//register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);
    return response.data;
};

//login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
    return response.data;
};

const authService = {
    register,
    login,
};

export default authService;