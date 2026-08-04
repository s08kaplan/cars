import axios from "axios"

export const getBudgetData = async () => {
  try {
    const { data } = await axios(`${import.meta.env.VITE_BASE_URL}budgets?limit=30`)
        console.log("budget data: ", data)
        return data
  } catch (error) {
      console.error("Budget data not found", error);
  }
}