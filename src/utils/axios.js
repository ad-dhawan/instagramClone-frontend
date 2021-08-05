import axios from "axios";

export const serverUrl = 'http://localhost:8000'

export default axios.create({
    baseURL: serverUrl,
});