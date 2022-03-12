import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import { StarshipDetailScreen } from "../screens/StarshipDetailScreen";

import { Routes } from "./Routes";

type Props = {};

const Navigator = (props: Props) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
        <Stack.Screen
          name={Routes.STARSHIP_FEED_SCREEN}
          component={StarshipFeedScreen}
        />
        <Stack.Screen
          name={Routes.STARSHIP_DETAIL_SCREEN}
          component={StarshipDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
