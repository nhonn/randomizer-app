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
      max: 100,
      result: ''
    };
  }

  _onPress = (text) => {
    this.setState({
      result: text
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.resultContainer}>{this.state.result}</Text>
          <Text>
            Range:
          </Text>
          <TextInput
            onChangeText={(text) => this.setState({ min: Number.parseInt(text) })}
            style={styles.textInputContainer}
            keyboardType= "numeric"
          />
          <Text> - </Text>
        <TextInput
          onChangeText={(text) => this.setState({ max: Number.parseInt(text) })}
          style={styles.textInputContainer}
          keyboardType= "numeric"
        />
        <TouchableOpacity
          onPress={() => this._onPress(randomize(this.state.min, this.state.max))}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>GENERATE</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

randomize = (min, max) => {
  random = (Math.random() * (max - min) + min).toFixed(0)
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
    backgroundColor: '#40e0d0',
    top: 30,
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
  textInputContainer: {
    backgroundColor: '#f1f1f1',
    minWidth: 50,
    textAlign: 'center',
  },
  resultContainer: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#40e0d0',
  }
});
