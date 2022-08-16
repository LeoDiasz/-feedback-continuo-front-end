import axios from "axios";


export const apiDbc = axios.create({baseURL: "https://feedback-continuo.herokuapp.com"})