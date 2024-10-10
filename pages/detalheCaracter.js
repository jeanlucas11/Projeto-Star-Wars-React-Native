import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function detalheCaracter({ route, navigation }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.detail}>Altura: {character.height} cm</Text>
      <Text style={styles.detail}>Peso: {character.mass} kg</Text>
      <Text style={styles.detail}>Cor do Cabelo: {character.hair_color}</Text>
      <Text style={styles.detail}>Cor da Pele: {character.skin_color}</Text>
      <Text style={styles.detail}>Cor dos Olhos: {character.eye_color}</Text>
      <Text style={styles.detail}>Gênero: {character.gender}</Text>

      <Button
        title="Naves"
        onPress={() => navigation.navigate("Starships", { character })}
      />
      <Button
        title="Filmes"
        onPress={() => navigation.navigate("Films", { character })}
      />
      <Button
        title="Veículos"
        onPress={() => navigation.navigate("Vehicles", { character })}
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
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});
