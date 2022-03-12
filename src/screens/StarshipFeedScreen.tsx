import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { useStarships } from "../../hooks/useStarships";
import { StarshipCard } from "../components/StarshipCard";
import { Routes } from "../Navigation/Routes";

export const StarshipFeedScreen = ({ navigation }) => {
  const { isLoading, isError, data } = useStarships();

  if (isLoading) {
    return <Text> Loading </Text>;
  }
  if (isError) {
    return <Text> Error </Text>;
  }

  function onPress(item: any) {
    navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, { item: item });
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <StarshipCard shipData={item} />
      </TouchableOpacity>
    );
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
