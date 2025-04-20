import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren, ReactNode } from "react";
import Icon from "./Icon";
import IconBold from "./IconBold";
import IconRed from "./IconRed";

interface IconBarProps {
  children: ReactNode;
}

export default function IconBar({ children }: IconBarProps) {
  return <View style={styles.iconBarContainer}>{children}</View>;
}

IconBar.Default = Icon;
IconBar.Red = IconRed;
IconBar.Bold = IconBold;

const styles = StyleSheet.create({
  iconBarContainer: {
    flexDirection: "row",
    padding: 24,
    justifyContent: "space-between",
  },
});
