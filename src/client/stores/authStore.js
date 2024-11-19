import create from 'zustand';

export const useAuth = create((set) => ({
  user: {
    id: 'demo-user',
    email: 'demo@example.com',
    firstName: 'Demo',
    lastName: 'User',
    role: 'ADMIN'
  },
  token: 'demo-token',
  isAuthenticated: true,
  isLoading: false,
  error: null,

  login: async () => {
    set({ 
      isAuthenticated: true,
      user: {
        id: 'demo-user',
        email: 'demo@example.com',
        firstName: 'Demo',
        lastName: 'User',
        role: 'ADMIN'
      }
    });
  },

  logout: () => {
    set({ 
      user: null,
      token: null,
      isAuthenticated: false 
    });
  },

  checkAuth: async () => {
    set({ 
      isAuthenticated: true,
      user: {
        id: 'demo-user',
        email: 'demo@example.com',
        firstName: 'Demo',
        lastName: 'User',
        role: 'ADMIN'
      }
    });
  }
}));