import axios from "axios"

export const api = axios.create({
  baseURL: "https://notes-api-ui8s.onrender.com",
})