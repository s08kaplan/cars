import axios from "axios";
import type { ContactFormData } from "src/components/Form/ContactForm";

export interface UpdateMessageStatusParams {
  id: string;
  isRead: boolean;
}

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

  updateMessageStatus: async ({ id, isRead }: UpdateMessageStatusParams) => {
    try {
      console.log(`Axios PATCH payload sent to backend:`, { isRead: Boolean(isRead) });
      const { data } = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}messages/${id}`,
        { isRead: Boolean(isRead) },
       { withCredentials: true},
      );
      return data;
    } catch (error) {
      console.error("could not update message status: ", error);
      throw error;
    }
  },
};
