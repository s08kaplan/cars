import axios from "axios"

export const getCarByQuery = async (name: string) => {
    try {
        const { data } = await axios(`${import.meta.env.VITE_BASE_URL}cars?search[brandName]=${name}`)
        console.log("get car by Name: ",data)
        return data
    } catch (error) {
        console.error("searching error", error);
        
    }
}

