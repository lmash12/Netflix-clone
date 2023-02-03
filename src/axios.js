import axios from "axios";

// // this makes the requests for the movie url database
// good to use when making a lot of requests for your app
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
