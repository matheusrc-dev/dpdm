import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuthStore } from '../store/useAuthStore';

export const HomeScreen = () => {
  const logout = useAuthStore((state) => state.logout);
  const token = useAuthStore((state) => state.token);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen!</Text>
      <Text style={styles.token}>Your token: {token}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  token: {
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
  },
}); 