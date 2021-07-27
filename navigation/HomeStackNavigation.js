import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import SplashScreen from "../screens/SplashScreen";
import OnboardindScreen from "../screens/OnboardindScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardindScreen"
        component={OnboardindScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigation() {
  return <MyStack />;
}
