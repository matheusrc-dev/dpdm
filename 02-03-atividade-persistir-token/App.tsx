import React from 'react';
import { useAuthStore } from './src/store/useAuthStore';
import { LoginScreen } from './src/screens/LoginScreen';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  const token = useAuthStore((state) => state.token);

  return token ? <HomeScreen /> : <LoginScreen />;
} 