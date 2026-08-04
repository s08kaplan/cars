import axios from "axios";
import type {
  LoginFormData,
  RegisterFormData,
} from "../components/Form/AuthForm";

const BASE_URL = import.meta.env.VITE_BASE_URL;

axios.defaults.withCredentials = true;

interface User {
  id: string;
  firstName: string;
  lastName: string;
  image?: string;
  email: string;
  contactNumber: string;
  role: number;
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
    const { data } = await axios.post<AuthResponse>(
      `${BASE_URL}users`,
      userData,
    );
    return data.user;
  },

  logout: async (): Promise<void> => {
    await axios.post(`${BASE_URL}auth/logout`);
  },

  getCurrentUser: async (): Promise<User | null | undefined> => {
    try {
      const { data } = await axios.get<AuthResponse>(`${BASE_URL}auth/me`);
      return data.user;
    } catch (error: any) {
      if (error?.response?.status === 401) {
        return null;
      }
     /*  throw error; */
    }
  },
  update: async (userData: UpdateUserData): Promise<User> => {
    const { data } = await axios.put<UpdateUserResponse>(
      `${BASE_URL}users/${userData.userId}`,
      userData,
    );
    return data.user;
  },
};
