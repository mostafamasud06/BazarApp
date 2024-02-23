import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useIsFocused } from '@react-navigation/native' // Import useIsFocused hook
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons' // Import icons from Expo
import tw from 'twrnc'

const TabBar = ({ navigation }) => {
  const isFocused = useIsFocused() // Check if the current screen is focused

  return (
    <View
      style={tw`absolute bottom-0 left-0 right-0 p-4 flex-row justify-around items-center bg-white shadow-md`}>
      {/* Home Tab */}
      <TouchableOpacity
        onPress={() => navigation.navigate('WelcomePage')}
        style={tw`flex-1 items-center`}>
        <AntDesign name="home" size={24} color={isFocused ? 'black' : 'gray'} />{' '}
        {/* Change color based on focus */}
        <Text style={tw`text-xs`}>Home</Text>
      </TouchableOpacity>

      {/* Services Tab */}
      <TouchableOpacity
        onPress={navigateToAnotherPage}
        style={tw`flex-1 items-center`}>
        <Feather name="box" size={24} color="black" />
        <Text style={tw`text-xs`}>Services</Text>
      </TouchableOpacity>

      {/* Cart Tab */}
      <TouchableOpacity
        onPress={navigateToAnotherPage}
        style={tw`flex-1 items-center`}>
        <FontAwesome5 name="shopping-cart" size={24} color="black" />
        <Text style={tw`text-xs`}>Cart</Text>
      </TouchableOpacity>

      {/* Profile Tab */}
      <TouchableOpacity
        onPress={navigateToAnotherPage}
        style={tw`flex-1 items-center`}>
        <AntDesign name="user" size={24} color="black" />
        <Text style={tw`text-xs`}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TabBar
