
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { Text, View } from '../../components/Themed';
import React from 'react';

export default function TabTwoScreen() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Was für eine Frage treibt dich um?</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <SafeAreaView style={styles.safe}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        multiline = {true}
        numberOfLines = {4}
      />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#FFF",
  },
});
