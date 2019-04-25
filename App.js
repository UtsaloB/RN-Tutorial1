/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,
  View, Image, Button, TouchableHighlight} from 'react-native';
import { placeholder } from '@babel/types';
// import console = require('console');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
// const pup = 'https://static.scientificamerican.com/sciam/cache/file/D059BC4A-CCF3-4495-849ABBAFAED10456_source.jpg?w=590&h=800&526ED1E1-34FF-4472-B348B8B4769AB2A1';
const butfly = 'https://previews.123rf.com/images/thawats/thawats1602/thawats160200028/53632231-beautiful-three-monarch-butterfly-isolated-on-white-background.jpg';
type Props = {};
export default class App extends Component<Props> {
  
  // constructor(){
  //   this.state = {
  //     text: ''
  //   }
  // }
  render() {
    return (
      <View style={styles.container}>
       <TouchableHighlight onPress = {()=> console.log('ASDF')}>
       {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
        <Image style={styles.image} 
          source = {{uri: butfly}}
        />

       <Text style={styles.info}>Login Information</Text>
       <TextInput style={styles.input>
          placeholder="Firstname"
          keyboardType='Default'
          maxLenght='40'
          autoCorrect={false}
       />
       <TextInput style={styles.input>
        placeholder="Secondname"
        keyboardType='Default'
        maxLenght='40'
        autoCorrect={false}
        />

        { <Button 
          onPress={()=>console.log("Press Me")}
          title="Login"
          color="#edd5ed"
          accessibilityLabel="LOGIN"
        />}

        </TouchableHighlight>
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#566368',
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  //   backgroundColor: '#f1f442'
  // },
  touchableHighlight: {
    backgroundColor: 
  },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    },
  input: {
    height: 40,
    backgroundColor: '#b7c8ce',
    color: '#fff',

  }
});
