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
  TabBarIOS
} from 'react-native';
var Icon = require('react-native-vector-icons/Ionicons');
export default class Weixin extends Component<{}> {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  render() {
    return (
      <View style={styles.container}>
            <Text>消息通知</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 

  container: {
    flex: 1,
    paddingTop: 22
   },
   
});
