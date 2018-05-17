/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(){
    state = {
      min = 0,
      max = 100
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          min
        </Text>
        <TextInput onEndEditing={(text) => this.state.min = text } placeholder='from number'/>
        <Text>
          max
        </Text>
        <TextInput onEndEditing={(text)=> this.state.max = text} placeholder='to number'/>
        <TouchableOpacity
          onPress={() => alert(randomize(this.state.min,this.state.max))}
          style={styles.buttonContainer}
        >
        <Text style={styles.buttonText}>GENERATE</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

function randomize(min, max){
  let randomNumber = Math.random(max - min) + min
  return randomNumber
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#f00f00'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  resultContainer: {
    color: '#555555',
    fontSize: 40,
    fontWeight: 'bold',
  }
});
