import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getTokenFromMemory()
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      clearTokenFromMemory()
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Token management in memory (not localStorage to avoid XSS)
let tokenMemory: string | null = null

export const setTokenInMemory = (token: string) => {
  tokenMemory = token
}

export const getTokenFromMemory = (): string | null => {
  return tokenMemory
}

export const clearTokenFromMemory = () => {
  tokenMemory = null
}

export default api

