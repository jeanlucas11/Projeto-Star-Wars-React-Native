import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import axios from "axios";

export default function caracterePages({ navigation }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();

    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("Sobre")}
          title="Sobre"
          color="#000"
        />
      ),
    });
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      setCharacters(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const renderCharacter = ({ item }) => (
    <View style={styles.characterContainer}>
      <Text style={styles.characterName}>{item.name}</Text>
      <Button
        title="Detalhes"
        onPress={() =>
          navigation.navigate("CharacterDetail", { character: item })
        }
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personagens</Text>
      <FlatList
        data={characters}
        renderItem={renderCharacter}
        keyExtractor={(item) => item.name}
      />
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
  characterContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  characterName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
