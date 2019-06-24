/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

import MenuUtama from './Components/MenuUtama'
import MenuGame from './Components/MenuGame'
import MenuBerita from './Components/MenuBerita'

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
        <MenuUtama/>
        <MenuGame/>
        <MenuBerita/>
        <Footer/>
      </View>
    );
  }
}
