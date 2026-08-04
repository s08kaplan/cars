import axios from "axios"

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