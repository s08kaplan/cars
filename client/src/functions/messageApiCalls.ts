import axios from "axios";
import type { ContactFormData } from "src/components/Form/ContactForm";

export const messageApi = {
  getMessageData: async (url: string) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}messages/${url}`,
      );
      console.log("message data: ", data);
      return data;
    } catch (error) {
      console.error("could not get total message number: ", error);
      throw error;
    }
  },

  getMessageList: async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BASE_URL}messages`,
      );
      console.log("message list data: ", data);
      return data;
    } catch (error) {
      console.error("could not get message list: ", error);
      throw error;
    }
  },

  newMessage: async (data: ContactFormData) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}messages`,
      data,
    );
    return response.data;
  },
};
