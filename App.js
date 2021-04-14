import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import BookDetailScreen from "./src/screens/BookDetailScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Ном" }}
        />

        <Stack.Screen
          name="Detail"
          component={BookDetailScreen}
          options={{ title: "Ном" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
