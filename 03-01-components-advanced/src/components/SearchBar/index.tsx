import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.headerRow}>
      <TextInput
        style={styles.headerSearch}
        value={search}
        onChangeText={(val) => setSearch(val)}
        placeholder="Buscar no PDMercado Livre"
      />
      <TouchableOpacity
        style={styles.headerIcon}
        onPress={() => onSearch(search)}
      >
        <Text>Go!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  headerIcon: {
    width: 48,
    height: 48,
    backgroundColor: "lightgrey",
    borderRadius: 24,
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRow: {
    flexDirection: "row",
  },
});
