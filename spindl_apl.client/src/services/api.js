/*import axios from "axios";

const API_URL = "https://localhost:7127/api";

// Authentication
const register = (userName, email, password) => {
    return axios.post(`${API_URL}/users/register`, {
      userName,
      email,
      password,
    });
  };
  
  const login = (email, password) => {
    return axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
  };
  
  // Bookings
  const getBookings = () => axios.get(`${API_URL}/bookings`);
  const getBooking = (id) => axios.get(`${API_URL}/bookings/${id}`);
  const createBooking = (booking) => axios.post(`${API_URL}/bookings`, booking);
  const updateBooking = (id, booking) =>
    axios.put(`${API_URL}/bookings/${id}`, booking);
  const deleteBooking = (id) => axios.delete(`${API_URL}/bookings/${id}`); 
  
  
  export default {
    register,
    login,
    getBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking,    
  };*/