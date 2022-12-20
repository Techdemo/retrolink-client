import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { authUser } = useAuth();

  React.useEffect(() => {
    if (!authUser?.uid) {
      router.push('/profile/login');
    }

  }, [router, authUser]);

  return <div>{children}</div>;
};
