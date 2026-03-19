import React, { useEffect, useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const response = async() => {
      const authResponse = await fetch("https://b12-feed-backend.vercel.app/api", {
        method: "GET",
        credentials: "include"
      });
      
      if (!authResponse.ok) {
        setIsAuth(true);
        setLoading(false);
      } else {
        setIsAuth(false)
        setLoading(false);
      }

    }
    response();
  }, [])


  // 1. LOADING LOGIC
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="w-12 h-12 border-4 border-[#e9f6f3] border-t-[#058177] rounded-full animate-spin"></div>
        <p className="mt-4 text-sm font-medium text-gray-500 animate-pulse">Verifying session...</p>
      </div>
    );
  }

  // 2. AUTHENTICATION CHECK 
  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // 3. SUCCESS 
  return children;
};

export default PrivateRoute;