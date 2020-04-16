import React, {useState} from 'react';
import {View, Image, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    // {id: uuid(), text: 'Milk'},
    {id: Math.random(), text: 'Milk'},
    {id: Math.random(), text: 'Eggs'},
    {id: Math.random(), text: 'Juice'},
    {id: Math.random(), text: 'Bacon'},
    {id: Math.random(), text: 'Cereals'},
    {id: Math.random(), text: 'Chesee'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'Error',
        'Please enter an item',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <View style={styles.imgContainer}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/3.jpg'}}
          style={styles.img}
        />
      </View>

      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default App;
