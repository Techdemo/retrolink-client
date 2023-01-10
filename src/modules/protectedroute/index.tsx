import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { authUser, loading } = useAuth();

  React.useEffect(() => {
    console.log('authUser', authUser);
    if (!authUser && !loading) {
      router.push('/profile/login');
    };

  }, [router, loading, authUser]);

  if (loading) return null;

  return <>{children}</>;
};
