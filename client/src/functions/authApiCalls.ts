/* import axios from "axios"; */
import { api } from "src/api/axiosInstance";
import type {
  LoginFormData,
  RegisterFormData,
} from "../components/Form/AuthForm";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

/* axios.defaults.withCredentials = true; */

interface User {
  id: string;
  firstName: string;
  lastName: string;
  image?: string;
  email: string;
  contactNumber: string;
  role: number;
  file?: File | null;
  createdAt?: string;
  updatedAt?: string;
}

interface AuthResponse {
  error: boolean;
  user: User;
  message?: string;
}

export type UpdateUserData = {
  firstName?: string;
  lastName?: string;
  image?: string;
  password?: string;
  userId: string;
  contactNumber?: string
  file?: File | null;
};

interface UpdateUserResponse {
  error: boolean;
  message: string;
  user: User;
}

export const authAPI = {
  login: async (credentials: LoginFormData): Promise<User> => {
    const { data } = await axios.post<AuthResponse>(
      `${BASE_URL}auth/login`,
      credentials,
    );
    return data.user;
  },

  register: async (userData: RegisterFormData): Promise<User> => {
    const { file, image, ...textData } = userData;

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      Object.entries(textData).forEach(([key, val]) => {
        if (val !== undefined && val !== null) {
          formData.append(key, String(val));
        }
      });
      const { data } = await api.post<AuthResponse>("/users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data.user;
    }

    const payload = {
      ...textData,
      ...(image ? { image } : {}),
    };
    const { data } = await api.post<AuthResponse>("/users", payload);
    return data.user;
  },

  logout: async (): Promise<void> => {
    await api.post(`${BASE_URL}auth/logout`);
  },

  getCurrentUser: async (): Promise<User | null | undefined> => {
    try {
      const { data } = await api.get<AuthResponse>(`auth/me`);
      console.log("data in get current user api call:", data);
      return data.user;
    } catch (error: any) {
      if (error?.response?.status === 401) {
        return null;
      }
      /*  throw error; */
    }
  },
  update: async (userData: UpdateUserData): Promise<User> => {
    const { userId, file, ...textData } = userData;

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      Object.entries(textData).forEach(([key, val]) => {
        if (val !== undefined && val !== null) {
          formData.append(key, String(val));
        }
      });
      const { data } = await api.put<UpdateUserResponse>(
        `/users/${userId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      return data.user;
    }

    const { data } = await api.put<UpdateUserResponse>(
      `/users/${userId}`,
      textData,
    );
    return data.user;
  },
};
