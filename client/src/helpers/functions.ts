import axios from "axios"
import { type LoginFormData, type RegisterFormData } from "src/components/Form/AuthForm"

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
    //console.log(userData)
   try {
    const  { data }  = await axios.post(`${import.meta.env.VITE_BASE_URL}auth/login`,userData)
    console.log("api response for user: ",data.user)
    return data.user
   } catch (error) {
    console.error("Login error", error);
    
   }
}

export const registerUser = async (userData: RegisterFormData) => {
   try {
    const { data } =await axios.post(`${import.meta.env.VITE_BASE_URL}users`, userData)
    return data.user
   } catch (error) {
    console.error("Register error", error);
    
   }
}

export const logout = async () => {
  try {
    const { data } = await axios(`${import.meta.env.VITE_BASE_URL}auth/logout`, {withCredentials: true})
  } catch (error) {
    console.error("Logout failed", error);
    
  }
}

//test 

export const getCarStatus = async (url?:string) => {
    if(!url) return
    try {
        const { data } = await axios(`${import.meta.env.VITE_BASE_URL}cars?filter[available]=${url}`)
        console.log("car status: ", data)
        return data
    } catch (error) {
        console.error("Car statistics not found", error);
        
    }
}

export const getBudgetData = async () => {
  try {
    const { data } = await axios(`${import.meta.env.VITE_BASE_URL}budgets`)
        console.log("budget data: ", data)
        return data
  } catch (error) {
      console.error("Budget data not found", error);
  }
}