import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
  ImageBackground,
} from "react-native";

import { useStarships } from "../../hooks/useStarships";
import { StarshipCard } from "../components/StarshipCard";

export const StarshipFeedScreen = () => {
  const { isLoading, isError, data } = useStarships();

  if (isLoading) {
    return <Text> Loading </Text>;
  }
  if (isError) {
    return <Text> Error </Text>;
  }

  const renderItem = ({ item }: any) => {
    return <StarshipCard shipData={item} />;
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ImageBackground
          resizeMode={"stretch"}
          source={require("../../assets/background.png")}
          style={styles.backgroundImage}
        >
          <FlatList
            data={data.results}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {},
  /*tinyLogo: {
    width: "80%",
    height: 250,
    alignSelf: "center",
    borderRadius: 20,
  },*/
  item: {},
  model_name: {},
  model: {},
  backgroundImage: {},
});
