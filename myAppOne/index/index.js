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
import IndexB from './I1'
import Hot from './I2'
import Write from './I3'
import Weixin from './I4'
import Info from './I5'

export default class Index extends Component<{}> {
  constructor(props){
    super(props)
    this.state={
      selectedTab: '0',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabBarIOS
        // unselectedTintColor="yellow"
        tintColor="#ee735c"
        // translucent={true}
        // barTintColor="darkslateblue"
        >
        <Icon.TabBarItem
          iconName='ios-home-outline'
          selectedIconName='ios-home'
          selected={this.state.selectedTab === '1'}
          onPress={() => {
            this.setState({
              selectedTab: '1',
            });
          }}>
          
          <IndexB />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          iconName='ios-bonfire-outline'
          selectedIconName='ios-bonfire'
          selected={this.state.selectedTab === '2'}
          onPress={() => {
            this.setState({
              selectedTab: '2',
            });
          }}>
          
          <Hot />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          systemIcon="history"
          // badge={5}
          iconName='ios-cloudy-night-outline'
          selectedIconName='ios-cloudy-night'
          selected={this.state.selectedTab === '3'}
          onPress={() => {
            this.setState({
              selectedTab: '3',
              notifCount: this.state.notifCount + 1,
            });
          }}>
        
          <Write />
        </Icon.TabBarItem>

        <Icon.TabBarItem
          systemIcon="history"
          // badge={5}
          iconName='ios-paper-plane-outline'
          selectedIconName='ios-paper-plane'
          selected={this.state.selectedTab === '4'}
          onPress={() => {
            this.setState({
              selectedTab: '4',
              notifCount: this.state.notifCount + 1,
            });
          }}>
        
          <Weixin />
        </Icon.TabBarItem>
        <Icon.TabBarItem
          iconName='ios-person-outline'
          selectedIconName='ios-person'
          selected={this.state.selectedTab === '5'}
          // title="个人"
          onPress={() => {
            this.setState({
              selectedTab: '5',
            });
          }}>
          <Info />
        </Icon.TabBarItem>
      </TabBarIOS>
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
   
});
