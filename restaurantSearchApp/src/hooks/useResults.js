import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "Paris",
          term: searchTerm,
        },
      });
      setRestaurants(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong. Please try again later");
    }
  };

  useEffect(() => {
    searchApi("pizza");
  }, []);

  return [searchApi, restaurants, errorMessage];
};
