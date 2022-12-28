import React from 'react';
import { useRouter } from 'next/router';
import useFirebaseAuth from 'hooks/useFirebaseAuth';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { authUser, loading } = useFirebaseAuth();

  React.useEffect(() => {
    if (!loading && authUser === null) {
      router.push('/profile/login');
    }

  }, [router, authUser, loading]);

  if (loading) return null;

  return <div>{children}</div>;
};
