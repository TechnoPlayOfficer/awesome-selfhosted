"use client";
import { useState, useEffect } from 'react';

export type UserRole = 'owner' | 'investor' | 'admin';

export const useUserRole = () => {
  // Inicialización segura para SSR: primero verificamos si estamos en el navegador
  const [role, setRole] = useState<UserRole>(() => {
    if (typeof window !== 'undefined') {
      const savedRole = localStorage.getItem('accet_user_role');
      return (savedRole as UserRole) || 'owner';
    }
    return 'owner';
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedRole = localStorage.getItem('accet_user_role');
      if (savedRole) {
        setRole(savedRole as UserRole);
      }
      setIsLoaded(true);
    }
  }, []);

  const switchRole = (newRole: UserRole) => {
    setRole(newRole);
    if (typeof window !== 'undefined') {
      localStorage.setItem('accet_user_role', newRole);
    }
  };

  return { role, switchRole, isLoaded };
};
