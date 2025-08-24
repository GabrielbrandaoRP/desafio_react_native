

import { themes } from "@/globals/themes";
import { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

type Props = {
  onChange: (filter: "todas" | "fazer" | "feitas") => void;
};
export default function FilterTabs({ onChange }: Props) {
  const [active, setActive] = useState<"todas" | "fazer" | "feitas">("todas");

  const handlePress = (filter: "todas" | "fazer" | "feitas") => {
    setActive(filter);
    onChange(filter);
  };

  return (
    <View style={styles.container}>
      {["todas", "fazer", "feitas"].map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => handlePress(item as any)}
          style={[
            styles.tab,
            active === item && styles.activeTab,
          ]}
        >
          <Text style={[styles.text, active === item && styles.activeText]}>
            {item === "todas" ? "Todas" : item === "fazer" ? "A fazer" : "Feitas"}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: "row",alignItems: "center", justifyContent: "center", width: "100%",},
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#f1f1f1",
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: themes.colors.green,
  },
  text: {
    color: "#666",
    fontWeight: "500",
  },
  activeText: {
    color: "#fff",
  },
});
