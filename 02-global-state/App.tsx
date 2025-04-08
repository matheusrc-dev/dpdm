import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Label from "./components/Label";
import useCounter from "./states/useCounter";

export default function App() {
  const { add, reset } = useCounter();


  return (
    <View style={styles.container}>
      <Label />
      <Button title="Counter" onPress={() => add()} />
      <Button title="Reset" onPress={() => reset()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
