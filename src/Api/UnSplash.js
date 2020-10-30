import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID PzdzfONSIuikMaW_5aHZEd3hc6iOj45I_GiFaoMRNFY",
  },
});
