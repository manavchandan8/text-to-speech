import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
    }
  }

  speak = () => {
    Speech.speak(this.state.text);
  }

  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <Text style={{fontSize: 20, color: "white"}}>Text To Speech Converter</Text>          
        </View>

        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <TextInput style={styles.input}
            onChangeText={text => {
              this.setState({text: text});
          }} />

          <TouchableOpacity style={styles.button}
            onPress={() => {
              this.state.text ? this.speak() : alert("Please Enter Something in the Input Box to Hear It")
            }}>
            Speak It Out
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    margin: 20,
    padding: 20,
    borderRadius: 25, 
    backgroundColor: "#909090",
  },

  button: {
    width: 200,
    height: 50,
    margin: 20,
    padding: 20,
    paddingLeft: 30,
    paddingBottom: 35,
    borderRadius: 25,
    backgroundColor: "#00ff00",
    textAlign: "center",
  },

  text: {
    fontSize: 20,
    margin: 20,
  },

  headerContainer: {
    backgroundColor: "black",
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  }
})