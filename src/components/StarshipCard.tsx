import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
  ScrollView,
  Image,
} from "react-native";

export const StarshipCard = ({ shipData }: any) => (
  <View style={styles.item}>
    <Text style={styles.model_name}>{shipData.model}</Text>
    <Text style={styles.model}>{shipData.manufacturer}</Text>
    <Text style={styles.model}>{shipData.cost_in_credits} credits</Text>
    {/*<Image
      style={styles.tinyLogo}
      source={require("../../assets/starships/deathstar.jpg")}
    />*/}
  </View>
);

const styles = StyleSheet.create({
  //safeContainer: {},
  //container: {},
  /*tinyLogo: {
    width: "60%",
    height: 200,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 2,
  },*/
  item: {
    backgroundColor: "rgba(251, 57, 39, 0.18)",
    paddingTop: 20,
    paddingBottom: 20,
    marginVertical: 10,
    borderRadius: 1,
    marginTop: 30,
    borderWidth: 3,
    borderColor: "#FE3219",
    marginLeft: 40,
    marginRight: 40,
  },
  model_name: {
    color: "#FE3219",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "#FE3219",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 8,
    paddingRight: 8,
  },
  model: {
    color: "white",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "white",
    fontSize: 15,
    textAlign: "center",
    marginTop: 5,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
