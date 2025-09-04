import axios from "axios";

export const publicApiClient= axios.create({
  baseURL: "http://localhost:8050/api/v1",
  headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
  }
})





