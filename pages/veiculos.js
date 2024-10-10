// screens/veiculos.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

export default function veiculos({ route }) {
  const { character } = route.params;
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const vehiclePromises = character.vehicles.map((url) => axios.get(url));
      const vehicleResponses = await Promise.all(vehiclePromises);
      const vehiclesData = vehicleResponses.map((response) => response.data);
      setVehicles(vehiclesData);
    } catch (error) {
      console.error(error);
    }
  };

  const renderVehicle = ({ item }) => (
    <View style={styles.vehicleContainer}>
      <Text style={styles.vehicleName}>{item.name}</Text>
      <Text>Modelo: {item.model}</Text>
      <Text>Número de Passageiros: {item.passengers}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veículos</Text>
      {vehicles.length > 0 ? (
        <FlatList
          data={vehicles}
          renderItem={renderVehicle}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <Text style={styles.noData}>
          Este personagem não possui veículos associados.
        </Text>
      )}
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
  vehicleContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  noData: {
    fontSize: 16,
    color: "#999",
  },
});
