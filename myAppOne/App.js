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
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
  TabBarIOS,
  Dimensions
} from 'react-native';

import Index from './index/index.js' 
var Icon = require('react-native-vector-icons/Ionicons');

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export default class App extends Component<{}> {
  constructor(props){
    super(props)
    this.state={
      booted:true
    }
  }
  render() {
    return (
      <View style={styles.container}>
         <Index />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:'#fff'
   },
   bootPage:{
     width:width,
     height:height,
     backgroundColor:"#fff",
     justifyContent:'center'
   }
   
});
