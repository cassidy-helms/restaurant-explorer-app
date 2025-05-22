import { useState, useEffect } from "react";
import { searchNearbyRestaurants } from "../services/searchNearbyService";

const SearchNearbyComponent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await searchNearbyRestaurants();
        setRestaurants(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchRestaurants();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Nearby Restaurants</h1>
      <h2>{restaurants.length} results found</h2>
      <ul>
        {restaurants.map((restaurant, idx) => (
          <li key={restaurant.id || idx}>
            {restaurant.displayName?.text || "Unnamed Restaurant"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchNearbyComponent;