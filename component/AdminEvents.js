/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StatusBar, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Body, Title, Button, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';


const App = () => {
  let navigation = useNavigation();

  return (
    <Container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: '100%',
       
      }}>
      <StatusBar barStyle="dark-content" />
      <Text style={{fontSize:30}}>Admin Events</Text>
      <TouchableOpacity 
      style={[styles.btns,{ backgroundColor:'#f0ee92',}]} >
          <Text style={styles.btnTxt}>Create Event</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={[styles.btns,{ backgroundColor:'#a6c1ed',}]} >
          <Text style={styles.btnTxt}>Get Specific Event with ID</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={[styles.btns,{ backgroundColor:'#b8eda6',}]} >
          <Text style={styles.btnTxt}>Get All Events</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={[styles.btns,{ backgroundColor:'#dba6ed',}]} >
          <Text style={styles.btnTxt}>Update Specific Event</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={[styles.btns,{ backgroundColor:'#edb4a6',}]} >
          <Text style={styles.btnTxt}>Delete Specific Event</Text>
      </TouchableOpacity>
      
     
      
    </Container>
  );
};

const styles = StyleSheet.create({
  btns: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    marginTop: '4%',
    padding: 10,
    borderRadius: 30
  },
  btnTxt:{
    width: '100%', textAlign: 'center', color:'black', fontSize: 18
  }
});

export default App;
