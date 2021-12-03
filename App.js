import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Linking, Button, Touchable, TouchableOpacity } from 'react-native';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cadastro = () => {
    // logica de autenticação
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Text style={styles.title}>Log In</Text>
      <View style={styles.form}>
        <Text style={styles.textplace}>Email or username</Text>
        <TextInput style={styles.textInput} placeholder="Email ou username" />

        <Text style={styles.textplace}>password</Text>
        <TextInput style={styles.textInput} placeholder="Password" />

        <Text style={{color: '#6666', marginTop: '20px'}}>Fotgot Password</Text>

        <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
          <Text style={{color: '#6666', textAlign:'center'}}>Log In</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: '20px', color: '#6666'}}>Don't have account? Create Account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c0c',
    color: '#6666',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '30px',
  },
  title: {
    fontSize: '38px',
    color: '#fff',
    fontWeight: 'bold'
  },

  form: {
    marginTop: '30px',
    width: '100%',
  },

  textplace: {
    color: '#6666',
    fontSize: '18px',
    textTransform: 'uppercase',
    marginBottom: '10px',
    marginTop: '20px',
  },
  textInput: {
    width: '100%',
    height: '40px',
    backgroundColor: '#191919',
    borderRadius: '10px',
    padding: '10px',
  },

  btnCadastro: {
    width: '100%',
    height: 40,
    backgroundColor: '#262626',
    justifyContent: 'center',
    marginTop: '20px',
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: 'bold'
  }

});
