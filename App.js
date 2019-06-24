/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


Header = () => {

  return(
    <View>
      <Text>
        Header
      </Text>
    </View>
  )
}

Footer = () => {

    return(
      <View>
        <Text>
          Footer
        </Text>
      </View>
    )
}

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header/>
      </View>
    );
  }
}
