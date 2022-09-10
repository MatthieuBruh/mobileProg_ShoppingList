import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, FlatList, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [item, setItem] = React.useState('');
  const [shoppingList, setShoppingList] = React.useState([]);

  const addItem = () => {
    if (item != '') {
      setShoppingList([...shoppingList, { key: item, value: item }]);
      setItem('');
      console.log(shoppingList);
    }
  }

  const clear = () => {
    setShoppingList([]);
  }

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.textInputStyle}
        onChangeText={value => setItem(value)}
        value={item}
      />
      <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', width: '75%' }}>
        <Button
            style={styles.buttonStyle}
            title="Add"
            onPress={addItem}
        />

        <Button
            style={styles.buttonStyle}
            title="Clear"
            onPress={clear}
        />
      </View>
      

      <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: '75%', margin: 20 }}>
        <Text style= {{ color: 'blue', fontSize: 16, fontWeight: 'bold' }} >Shopping List</Text>
        <FlatList
            data={shoppingList}
            renderItem={({item}) =><Text>{item.key}</Text>}
            keyExtractor={(item, index) => index.toString()}
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 10,
    height: 10,
    margin: 20,
    alignContent: 'center',
  },
  textInputStyle: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin:20
  }
});
