import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, ScrollView, Image } from "react-native";

export const StarshipCard = ({ shipData }: any) => (
    <View style={styles.item}>
      <Text style={styles.model_name}>{shipData.model}</Text>
      <Text style={styles.model}>{shipData.manufacturer}</Text>
      <Text style={styles.model}>{shipData.cost_in_credits} credits</Text>
      <Image style={styles.tinyLogo} source={require('../../assets/starships/deathstar.jpg')}/>
    </View>
);  

const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      paddingHorizontal: 20,
      marginTop: 20,
      backgroundColor: '#F5F5F5',
    },
    tinyLogo: {
      width: '80%',
      height: 250,
      alignSelf: 'center',
      marginTop: 20,
      borderRadius: 20,
    },
    item: {
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 20,
      marginTop: 20,
    },
    model_name: {
        color:'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    model: {
      color:'black',
      fontSize: 15,
      textAlign: 'center',
      marginTop: 5,
  }
  });