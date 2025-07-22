import { create } from "zustand";

type User = {
  id: string
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  password: string;
  image?: string;
  role: number;
}


interface AuthState {
    user: User | null
    setUser: (user: User | null) => void
    isAuthenticate: boolean
    setIsAuthenticate:(value: boolean) => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({user}),
    isAuthenticate: false,
    setIsAuthenticate: (value) => set({isAuthenticate:value})
}))