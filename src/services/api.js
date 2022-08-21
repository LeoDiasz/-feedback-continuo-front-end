import axios from "axios";


export const apiDbc = axios.create({baseURL: "https://feedback-continuos.herokuapp.com"})