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
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 100
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          min
        </Text>
        <TextInput 
          onChangeText={(text) => this.setState({min: Number.parseInt(text)})}
          placeholder='from number'
        />
        <Text>
          max
        </Text>
        <TextInput 
          onChangeText={(text) => this.setState({max: Number.parseInt(text)})}
          placeholder='to number'
        />
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

randomize = (min, max) => {
  random =  (Math.random() * (max - min) + min).toFixed(0)
  return random
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
