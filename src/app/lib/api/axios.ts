import axios from "axios";

const tmdApi = axios.create({
    baseURL: process.env.TMDB_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        "Content-Type": "application/json",
    },
});

export default tmdApi;