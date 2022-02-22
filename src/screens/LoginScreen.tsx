import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Headline, TextInput, Button } from 'react-native-paper';

export default function App() {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Headline style={styles.headline}>Welcome to STARPORT</Headline>
      </View>

      <View style={styles.view2}>
      <TextInput style={styles.input}
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
      />
      <TextInput style={styles.input}
      label="Password"
      value={text}
      onChangeText={text => setText(text)}
      />
      </View>

      <View style={styles.view3}>
        <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:'70%',
    marginTop:25,
  },
  headline: {
    textAlign:'center',
    width:'100%',
  },
  button: {
    width:'70%',
    height: 50,
    marginTop:75,
    justifyContent:'center'
  },
  view1: {
    flex:1,
    backgroundColor:'red',
    width:'100%',
    justifyContent:'center'
  },
  view2: {
    flex:1,
    backgroundColor:"blue",
    width:"100%",
    justifyContent:'center'
  },
  view3: {
    flex:1
  }
});
