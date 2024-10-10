import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import caracterePages from "./pages/caracterePages";
import detalheCaracter from "./pages/detalheCaracter";
import naves from "./pages/naves";
import filmes from "./pages/filmes";
import veiculos from "./pages/veiculos";
import sobre from "./pages/sobre";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Characters">
        <Stack.Screen name="Characters" component={caracterePages} />
        <Stack.Screen name="CharacterDetail" component={detalheCaracter} />
        <Stack.Screen name="Starships" component={naves} />
        <Stack.Screen name="Films" component={filmes} />
        <Stack.Screen name="Vehicles" component={veiculos} />
        <Stack.Screen name="Sobre" component={sobre} />{" "}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
