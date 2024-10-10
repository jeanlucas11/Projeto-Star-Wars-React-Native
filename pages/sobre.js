// screens/sobre.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre os Desenvolvedores</Text>

      <View style={styles.developerContainer}>
        <Text style={styles.label}>RA:</Text>
        <Text style={styles.info}>1134871</Text>

        <Text style={styles.label}>Nome Completo:</Text>
        <Text style={styles.info}>Jean Lucas de Cesare</Text>

        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.info}>jeanlucas@exemplo.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  developerContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});
