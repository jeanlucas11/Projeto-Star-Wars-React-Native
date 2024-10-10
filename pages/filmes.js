// screens/FilmsScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

export default function filmes({ route }) {
  const { character } = route.params;
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const filmPromises = character.films.map((url) => axios.get(url));
      const filmResponses = await Promise.all(filmPromises);
      const filmsData = filmResponses.map((response) => response.data);
      setFilms(filmsData);
    } catch (error) {
      console.error(error);
    }
  };

  const renderFilm = ({ item }) => (
    <View style={styles.filmContainer}>
      <Text style={styles.filmTitle}>{item.title}</Text>
      <Text>Diretor: {item.director}</Text>
      <Text>Produtor: {item.producer}</Text>
      <Text>Data de Lançamento: {item.release_date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes</Text>
      {films.length > 0 ? (
        <FlatList
          data={films}
          renderItem={renderFilm}
          keyExtractor={(item) => item.title}
        />
      ) : (
        <Text style={styles.noData}>
          Este personagem não aparece em filmes.
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
  filmContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  filmTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  noData: {
    fontSize: 16,
    color: "#999",
  },
});
