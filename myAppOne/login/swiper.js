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
} from 'react-native';
var Swiper=require('react-native-swiper')

export default class SwiperPerson extends Component<{}> {
  constructor(props){
    super(props)
    this.state={
        banner=["requier('../imgs/index/1.jpeg')","requier('../imgs/index/2.jpeg')","requier('../imgs/index/3.jpeg')"]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
            <Image source={this.state.banner[0]} />
        </View>
        <View style={styles.slide2}>
            <Image source={this.state.banner[1]} />
        </View>
        <View style={styles.slide3}>
            <Image source={this.state.banner[2]} />
        </View>
      </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:'green',
      // paddingTop:-100
   },
   slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
   
});
