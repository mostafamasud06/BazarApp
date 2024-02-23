import React, { useState } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native'
import { useNavigation } from '@react-navigation/native' // Import useNavigation hook

const RegistrationScreen = () => {
  const navigation = useNavigation() // Get navigation object
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [location, setLocation] = useState('')

  const handleRegistration = () => {
    // Handle registration logic here, e.g., send data to server
    console.log('Name:', name)
    console.log('Number:', number)
    console.log('Location:', location)
    // After registration, navigate back to the login screen
    navigation.navigate('Login')
  }

  return (
    <ImageBackground
      source={{
        uri: 'https://th.bing.com/th/id/R.2a8f0a0dc877908016c71e641ebb5470?rik=7KYfsKNTaozH1w&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1550989460-0adf9ea622e2%3fcrop%3dentropy%26cs%3dtinysrgb%26fit%3dmax%26fm%3djpg%26ixid%3dMnwxMjA3fDB8MXxzZWFyY2h8NHx8dmVnZXRhYmxlJTIwbWFya2V0fHwwfHx8fDE2MzE3NTg4MzM%26ixlib%3drb-1.2.1%26q%3d80%26w%3d1080&ehk=TVI9wbzwe452Lwq%2b%2fTUA4T79POum%2f7sj%2bUegthu5Jbc%3d&risl=&pid=ImgRaw&r=0',
      }}
      style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.registrationContainer}>
        <Text style={styles.title}>Registration</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          value={number}
          onChangeText={(text) => setNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const window = Dimensions.get('window')
const screenWidth = window.width
const screenHeight = window.height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight,
  },
  registrationContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: screenWidth < 400 ? '90%' : '80%',
    maxWidth: 400,
  },
  title: {
    fontSize: screenWidth < 400 ? 20 : 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default RegistrationScreen
