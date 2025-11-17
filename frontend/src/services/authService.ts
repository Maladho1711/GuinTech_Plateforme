import api, { setTokenInMemory, clearTokenFromMemory } from './api'
import { User } from '../store/slices/authSlice'

interface LoginResponse {
  user: User
  token: string
}

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', { email, password })
    setTokenInMemory(response.data.token)
    return response.data
  },

  async register(data: {
    email: string
    password: string
    firstName: string
    lastName: string
  }): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/register', data)
    setTokenInMemory(response.data.token)
    return response.data
  },

  async logout(): Promise<void> {
    clearTokenFromMemory()
    // Optionally call logout endpoint
    try {
      await api.post('/auth/logout')
    } catch (error) {
      // Ignore errors on logout
    }
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get<User>('/auth/me')
    return response.data
  },

  async updateProfile(data: Partial<User>): Promise<User> {
    const response = await api.patch<User>('/auth/profile', data)
    return response.data
  },
}

