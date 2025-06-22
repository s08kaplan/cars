import axios from "axios"

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