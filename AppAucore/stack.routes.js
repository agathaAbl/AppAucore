import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/Login";
import Onboarding from "./src/screens/Onboarding";
import Home from "./src/screens/Home";
import Conteudo from "./src/screens/Conteudo";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Conteudo" component={Conteudo} />
    </Stack.Navigator>
  );
}