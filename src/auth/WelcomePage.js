import React, { useState } from 'react'
import { useTailwind } from 'tailwind-rn'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons' // Import icons from Expo

export default function RegistrationScreen({ navigation }) {
  const tailwind = useTailwind()
  const [email, setEmail] = useState('')

  const onChangeText = (text) => {
    setEmail(text)
  }

  const navigateToAnotherPage = () => {
    // Code to navigate to another page
  }

  return (
    <View style={tw`bg-lime-500 flex-1 justify-start items-center pt-16`}>
      {/* Tab Bar */}
      <View
        style={tw`absolute bottom-0 left-0 right-0 p-4 flex-row justify-around items-center bg-white shadow-md`}>
        {/* Home Tab */}
        <TouchableOpacity
          onPress={navigateToAnotherPage}
          style={tw`flex-1 items-center`}>
          <AntDesign name="home" size={24} color="black" />
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

      {/* Search Bar */}
      <TextInput
        editable
        multiline
        numberOfLines={1}
        maxLength={40}
        onChangeText={onChangeText}
        value={email}
        style={tw`text-black bg-white pl-10 pr-10 rounded-4 mt-4`}
        placeholder="Search what you need!!"
        placeholderTextColor="gray"
      />
    </View>
  )
}
