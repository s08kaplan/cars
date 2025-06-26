import axios from "axios"
import { type LoginFormData, type RegisterFormData } from "src/components/AuthForm"

export const getCars = async (carId?: string) => {
    console.log(import.meta.env.VITE_BASE_URL)
    if(carId){
        try {
        const { data } = await axios(`${import.meta.env.VITE_BASE_URL}cars/${carId}`)
        console.log(data)
        return data
    } catch (error) {
        console.error(`Car ${carId} data not fetched`);
        
    }  
    }
  else {
    try {
        const { data } = await axios(`${import.meta.env.VITE_BASE_URL}cars/`)
        console.log(data) 
        return data
    } catch (error) {
        console.error("Cars data not fetched");
        
    }
  }
}

export const login = async (userData: LoginFormData) => {
   try {
    const { data } = axios.post(`${import.meta.env.VITE_BASE_URL}auth/login`,userData)
    return data
   } catch (error) {
    console.error("Login error", error);
    
   }
}

export const registerUser = async (userData: RegisterFormData) => {
   try {
    const { data } = axios.post(`${import.meta.env.VITE_BASE_URL}users`, userData)
    return data
   } catch (error) {
    console.error("Register error", error);
    
   }
}