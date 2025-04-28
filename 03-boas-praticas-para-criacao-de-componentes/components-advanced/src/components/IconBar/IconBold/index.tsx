import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface IconProps {
  text: string;
}

export default function IconBold({ text }: IconProps) {
  return (
    <View>
      <View style={styles.icon} />
      <Text style={styles.iconText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "lightgrey",
  },
  iconText: {
    color: "grey",
    textAlign: "center",
    fontWeight: "bold",
  },
});
