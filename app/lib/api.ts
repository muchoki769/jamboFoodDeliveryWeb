// lib/api.ts
import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:5000';

// Create axios instance with production config
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Request interceptor for auth tokens
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage or cookies in production
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      // Redirect to login if unauthorized
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/login';
      }
    }
    
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },
};

// Restaurant API calls
export const restaurantAPI = {
  getAll: async (city?: string) => {
    const params = city ? { city } : {};
    const response = await api.get('/restaurants', { params });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/restaurants/${id}`);
    return response.data;
  },

  search: async (query: string, city: string) => {
    const response = await api.get('/restaurants/search', { 
      params: { query, city } 
    });
    return response.data;
  },

  onboard: async (restaurantData: any) => {
    const response = await api.post('/restaurants', restaurantData);
    return response.data;
  },
};

// Orders API calls
export const orderAPI = {
  create: async (orderData: any) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  },

  getUserOrders: async () => {
    const response = await api.get('/orders/user');
    return response.data;
  },

  updateStatus: async (orderId: string, status: string) => {
    const response = await api.put(`/orders/${orderId}/status`, { status });
    return response.data;
  },
};

// Analytics API calls
export const analyticsAPI = {
  getDashboard: async () => {
    const response = await api.get('/analytics/dashboard');
    return response.data;
  },

  getRestaurantStats: async (restaurantId: string) => {
    const response = await api.get(`/analytics/restaurants/${restaurantId}`);
    return response.data;
  },
};

// Contact/Support API
export const supportAPI = {
  contact: async (contactData: any) => {
    const response = await api.post('/support/contact', contactData);
    return response.data;
  },

  subscribe: async (email: string) => {
    const response = await api.post('/support/subscribe', { email });
    return response.data;
  },
};