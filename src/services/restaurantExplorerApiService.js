import axios from 'axios';

const API_URL = 'http://localhost:8080'

export const getIndexMessage = async () => {
  try {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching index message:', error);
    throw error;
  }
}