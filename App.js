import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Login from './src/auth/Login' // Import the default export without curly braces
import RegistrationScreen from './src/auth/RegestrationScreen'
import WelcomePage from './src/auth/WelcomePage'

//added 01-02-2024
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/*export default function App() {
  return (
    <View style={styles.container}>
     <Login />
      <StatusBar style="auto" />
    </View>
  );
}*/

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="WelcomePage"
          component={WelcomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
