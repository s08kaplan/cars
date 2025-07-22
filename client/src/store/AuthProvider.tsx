import React, { useEffect } from 'react'
import useAuth from "src/tanstack-query/auth/useAuth"
import { useAuthStore } from './useAuthStore'

const AuthProvider = ({children}: { children: React.ReactNode}) => {
    const { data: user, isLoading, isError } = useAuth()
    const setUser = useAuthStore(state => state.setUser)
    const setIsAuthenticate = useAuthStore(state => state.setIsAuthenticate)

    useEffect(() => {
     if(!isLoading){
        if(!isError && user) setUser(user)
        else setUser(null)
        setIsAuthenticate(true)
     }
    }, [isLoading, isError, user, setUser, setIsAuthenticate])

    const isAuthenticate = useAuthStore(state => state.isAuthenticate)

    if(!isAuthenticate) return <div>Checking auth...</div>
    
  return <>{children}</>
}

export default AuthProvider