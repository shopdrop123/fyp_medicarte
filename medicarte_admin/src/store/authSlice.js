import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: JSON.parse(localStorage.getItem('medicarte_admin_user')) || null,
    
      setUser: (user) => {
        set({ user });
        localStorage.setItem('medicarte_admin_user', JSON.stringify(user));
      },
    
      clearUser: () => {
        set({ user: null });
        localStorage.removeItem('medicarte_admin_user');
      },
    }),
    {
      name: 'auth', // name of the item in storage (must be unique)
    }
  )
);

export default useAuthStore;
