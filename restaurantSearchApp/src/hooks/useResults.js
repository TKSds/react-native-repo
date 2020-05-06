import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const location = "Paris";

  const searchApi = async (searchTerm, searchLocation) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          location: searchLocation,
          term: searchTerm,
        },
      });
      setRestaurants(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong. Please try again later");
    }
  };

  useEffect(() => {
    searchApi("pizza", "Paris");
  }, []);

  return [searchApi, restaurants, errorMessage, location];
};
