import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icons from "react-native-vector-icons";

const note = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, note]);
    setNote('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={note}
        onChangeText={setNote}
        placeholder="Add a note..."
      />
      <TouchableOpacity style={styles.btn} onPress={addNote}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
      {notes.map((item, index) => (
        <View key={index} style={styles.note}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#1e90ff',  
    padding: 20,
  },
  input: {
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
  btn: {
    width:50,
    backgroundColor: '#333',
    padding: 10,
    alignItems: 'center',
    borderRadius:7,
    marginBottom:10,
   
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
  note: {
    backgroundColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
});

export default note;
