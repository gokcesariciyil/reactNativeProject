/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  Alert,
  TextInput,
  _ScrollView,
  FlatList,
  RefreshControl
} from 'react-native';

import UserComponent from './android/app/src/components/UserComponent';


const data = [{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
{
  "userId": 1,
  "id": 2,
  "title": "qui est esse",
  "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
},
{
  "userId": 1,
  "id": 3,
  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
},
{
  "userId": 1,
  "id": 4,
  "title": "eum et est occaecati",
  "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
},
{
  "userId": 1,
  "id": 5,
  "title": "nesciunt quas odio",
  "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
},
{
  "userId": 1,
  "id": 6,
  "title": "dolorem eum magni eos aperiam quia",
  "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
},]


function App(): JSX.Element {

  // Alert
  const [text, setText] = useState("");
  const handlePrompt = () => {
    Alert.alert(
      'Prompt',
      text,
      [
        {
          text: 'OK',
          onPress: () => {
            // Handle OK button press
          },
        },
        {
          text: 'Cancel',
          onPress: () => {
            // Handle Cancel button press
          },
          style: 'cancel',
        },
      ],
      {
        cancelable: false,
      }
    );
  };
  // Alert



  //Refresh
  const [refreshing, setRefreshing] = useState(false) //states
  const _onRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)

    }, 2000);
  }
  //Refresh



  //API Call
  const [show, setShowUserComponent] = useState(false);

  const handleShowUserComponent = () => {
    setShowUserComponent(true);
  };
  //API Call



  return (
    <SafeAreaView>
      <ScrollView>
          {show ? (
            <UserComponent />
          ) : (
            <Button title="User Component'i Göster" onPress={handleShowUserComponent} />
          )}
      </ScrollView>



      {/* <TextInput style={styles.textinput}
        maxLength={20}
        placeholder="Type something"
        value={text}
        onChangeText={setText} /> */}


      {/* <Text style={styles.smalltext}>{text}</Text>
      <Text style={styles.button}><Button title="Prompt" onPress={handlePrompt} /></Text> */}

      {/* {data.map(item => <Text style={styles.descriptionText}>{item.body}</Text>)} */}
      {/* <FlatList
        data={data}
        renderItem={({ item }) => <Text style={[styles.descriptionText, styles.text]}>{item.body}</Text>}
        keyExtractor={item => item.id.toString()}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />}
      /> */}

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50,
  },
  red: {
    color: 'red',
  },
  image: {
    width: "auto",
    height: 50,
    resizeMode: 'cover',
  },
  background: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    fontSize: 50,
    height: "100%",
    width: "100%"
  },
  textinput: {
    fontSize: 14,
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 40,
    marginTop: 50
  },
  descriptionText: {
    fontSize: 25,
    borderWidth: 1,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 10
  },
  text: {
    fontSize: 25,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    padding: 10
  },
  smalltext: {
    fontSize: 15,
    padding: 10,
    textAlign: 'center'
  },
  button: {
    width: "auto",
    textAlign: "center",
    height: 50,
  }
});


export default App;
