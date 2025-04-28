import { View, Text, StyleSheet } from "react-native";
import React from "react";

export interface OfferProps {
  title: string;
  desc: string;
  price: number;
  tags: string;
}

export default function Offer({ title, desc, price, tags }: OfferProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.image} />
      <Text style={styles.desc}>{desc}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.tags}>{tags}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    margin: 24,
    marginTop: 0,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    height: 150,
    backgroundColor: "#ADD8E6",
  },
  desc: {
    fontSize: 14,
    marginTop: 16,
  },
  price: {
    fontSize: 18,
    marginTop: 16,
  },
  tags: {
    color: "green",
    marginTop: 16,
  },
});
