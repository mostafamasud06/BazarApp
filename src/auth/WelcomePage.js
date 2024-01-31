import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function RegistrationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Bazar App</Text>
      <Text style={styles.descriptionText}>Register to explore our amazing features!</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});
