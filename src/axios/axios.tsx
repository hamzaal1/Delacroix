"use client"
import axios from "axios";
const axios_instance = axios.create({
    baseURL: process.env.BASE_URL,
    headers: { 'X-Custom-Header': 'foobar' }
})

export default axios_instance;