import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from "react-native";
import * as React from "react";
import { TextInput, Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

import { Header } from "../components/Header";
import { Routes } from "../Navigation/Routes";

// eslint-disable-next-line import/no-default-export
export default function LoginScreen({ navigation }) {
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");

  function navigateToTerms() {
    navigation.navigate(Routes.TERMS_SCREEN);
  }

  function navigateToStarshipFeedScreen() {
    navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode={"cover"}
        source={require("../../assets/space.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.heading}>
          <Image
            style={styles.imageTitle}
            source={require("../../assets/title.png")}
          />
        </View>

        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            label="Email"
            autoComplete={true}
            value={text}
            theme={{
              colors: {
                placeholder: "white",
                text: "white",
                primary: "white",
                underlineColor: "transparent",
                background: "#003489",
              },
            }}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.input}
            label="Password"
            autoComplete={true}
            value={password}
            theme={{
              colors: {
                placeholder: "white",
                text: "white",
                primary: "white",
                underlineColor: "transparent",
                background: "#003489",
              },
            }}
            onChangeText={(password) => setPassword(password)}
          />

          <Button
            style={styles.button}
            icon="login"
            mode="contained"
            onPress={navigateToStarshipFeedScreen}
          >
            Login
          </Button>
        </View>

        <View style={styles.terms}>
          <TouchableOpacity onPress={navigateToTerms}>
            <Text style={styles.termsText}>Read Terms and Conditions</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "70%",
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    backgroundColor: "#FE3219",
    alignSelf: "center",
  },
  heading: {
    flex: 2,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    fontFamily: "Comic Sans MS",
  },
  /*title: {
    color: "white",
    textAlign: "center",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 80,
    textTransform: "uppercase",
  },*/
  inputs: {
    flex: 4,
    width: "100%",
    justifyContent: "center",
  },
  input: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 40,
    borderRadius: 5,
    backgroundColor: "rgba(50, 50, 50, 0.9)",
    color: "white",
  },
  termsText: {
    color: "white",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  terms: {
    flex: 1,
    paddingTop: 10,
    width: "100%",
  },
  backgroundImage: {
    width: "100%",
    flex: 1,
  },
  imageTitle: {
    height: 150,
    width: "80%",
    marginTop: 150,
    alignSelf: "center",
  },
});
