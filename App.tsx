/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  Alert,
  useColorScheme,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({ children, title }: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

// }

function App(): JSX.Element {
  const [text, setText] = useState("")
  return (
    <SafeAreaView style={styles.background}>
      <TextInput maxLength={20}
        style={{ width: 200, height: 50, borderWidth: 1 }}
        placeholder='Type something'
        value={text}
        onChangeText={setText}
        secureTextEntry={true}
      />
      <Text>{text}</Text>
      <Button title="Prompt" onPress={() => Alert.prompt("Hello " + text, "How are you?", (val) => console.log(val))} />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  image: {
    width: "auto",
    height: 200,
    resizeMode: 'cover',
  },
  background: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default App;
