// screens/naves.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

export default function naves({ route }) {
  const { character } = route.params;
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetchStarships();
  }, []);

  const fetchStarships = async () => {
    try {
      const starshipPromises = character.starships.map((url) => axios.get(url));
      const starshipResponses = await Promise.all(starshipPromises);
      const starshipsData = starshipResponses.map((response) => response.data);
      setStarships(starshipsData);
    } catch (error) {
      console.error(error);
    }
  };

  const renderStarship = ({ item }) => (
    <View style={styles.starshipContainer}>
      <Text style={styles.starshipName}>{item.name}</Text>
      <Text>Modelo: {item.model}</Text>
      <Text>Fabricante: {item.manufacturer}</Text>
      <Text>Comprimento: {item.length} metros</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Naves</Text>
      {starships.length > 0 ? (
        <FlatList
          data={starships}
          renderItem={renderStarship}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <Text style={styles.noData}>
          Este personagem não tem naves associadas.
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
  starshipContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  starshipName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  noData: {
    fontSize: 16,
    color: "#999",
  },
});
