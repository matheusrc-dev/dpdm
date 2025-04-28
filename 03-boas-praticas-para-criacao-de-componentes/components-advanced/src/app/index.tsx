import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Offer from "../components/Offer";

import { offers } from "../mocks/offers";
import IconBar from "../components/IconBar";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const handleSearch = (val: string) => {
    console.log("Search for: ", val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SearchBar onSearch={handleSearch} />

        <Text style={styles.headerText}>
          Enviar para Fulano - Rua do Fulano, 800.
        </Text>
      </View>

      <IconBar>
        <IconBar.Bold text="Pagar" />
        <IconBar.Bold text="Ofertas" />
        <IconBar.Default text="Mercado" />
        <IconBar.Default text="Ver mais" />
      </IconBar>

      <ScrollView>
        {offers.map((item, index) => (
          <Offer
            key={index}
            title={item.title}
            desc={item.desc}
            price={item.price}
            tags={item.tags}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#fff159",
    padding: 24,
  },
  headerSearch: {
    backgroundColor: "white",
    paddingLeft: 8,
    height: 48,
    borderRadius: 24,
    flexGrow: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerText: {
    marginTop: 8,
    fontSize: 16,
  },
  headerIcon: {
    width: 48,
    height: 48,
    backgroundColor: "lightgrey",
    borderRadius: 24,
    marginLeft: 16,
  },
  headerRow: {
    flexDirection: "row",
  },
});
