import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>

      <View style={{
        backgroundColor: 'red',
        width: 100,
        flex:1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>1</Text>
      </View>

      <View style={{
        backgroundColor: 'blue',
        width: 100,
        flex:1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>2</Text>
      </View>

      <View style={{
        backgroundColor: 'green',
        width: 100,
        flex:2,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>3</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding: 50, 
      flexDirection: 'row',
      alignItems:'stretch',
      justifyContent: 'space-around'
  }

})


