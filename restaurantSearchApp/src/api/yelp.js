import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer OXkJHNO6OAfAxkFEjv2OXSPewxXZPcTDONGZl57XW4b14a7EPrjoOjN3R8klRRSbgOQ6EX05XmE0a4BJYPq1vKjKmqwelNTLcGGKW0PmyrXZCecVhif7WqKWwfOnXnYx",
  },
});
