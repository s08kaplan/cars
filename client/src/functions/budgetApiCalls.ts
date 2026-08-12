import axios from "axios"
import { api } from "src/api/axiosInstance"

export const getBudgetData = async () => {
  try {
    /* const { data } = await axios(`${import.meta.env.VITE_BASE_URL}budgets?limit=30`) */
    const { data } = await api.get("budgets?limit=30")
        console.log("budget data: ", data)
        return data
  } catch (error) {
      console.error("Budget data not found", error);
  }
}