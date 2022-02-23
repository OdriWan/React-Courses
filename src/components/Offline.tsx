import React from "react";
import { View, Text } from "react-native";
import { useIsConnected } from "react-native-offline";

export const Offline = () => {
  const isConnected = useIsConnected();

  return <View></View>;
};
