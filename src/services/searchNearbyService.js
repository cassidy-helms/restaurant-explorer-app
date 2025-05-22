import axios from "axios";

const API_URL = "http://localhost:8080/search";

export const searchNearbyRestaurants = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.places || [];
  } catch (error) {
    console.error("Error searching nearby restaurants:", error);
    throw error;
  }
};
