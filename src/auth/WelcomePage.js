import React, { useState } from 'react'
import { useTailwind } from 'tailwind-rn'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons' // Import icons from Expo
import TabBar from '../Tab_Bar/TabBar'
import { SimpleLineIcons, Ionicons, MaterialIcons } from '@expo/vector-icons'

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
    <View style={tw`bg-gray-200 flex-1 justify-start items-center pt-16`}>
      {/* Top Bar */}
      <View
        style={tw`absolute top-0 left-0 right-0 p-4 rounded-2 m-2 shadow-2xl flex-row justify-around items-center bg-white shadow-md`}>
        <TouchableOpacity onPress={navigateToAnotherPage} style={tw`flex-1 `}>
          <SimpleLineIcons name="menu" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToAnotherPage} style={tw`right-0 `}>
          <MaterialIcons name="notifications-none" size={26} color="black" />
        </TouchableOpacity>
      </View>
      {/* Top Bar end */}

      {/* 4 box middle */}
      <View
        style={tw`absolute mt-30 ml-4 left-0 w-3/7 h-1/3 p-4 rounded-2  shadow-2xl flex-row justify-around items-center bg-white shadow-md`}></View>

      <View
        style={tw`absolute mt-30 ml-2 right-0 w-3/7 mr-4 h-1/3 p-4 rounded-2  shadow-2xl flex-row justify-around items-center bg-white shadow-md`}></View>

      <View
        style={tw`absolute mt-30 ml-4 left-0 bottom-35 w-3/7 h-1/3 p-4 rounded-2  shadow-2xl flex-row justify-around items-center bg-white shadow-md`}></View>

      <View
        style={tw`absolute mt-30 ml-2 bottom-35 right-0 w-3/7 mr-4 h-1/3 p-4 rounded-2  shadow-2xl flex-row justify-around items-center bg-white shadow-md`}></View>

      {/* middle box end */}

      <TabBar navigateToAnotherPage={navigateToAnotherPage} />

      {/* Search Bar */}
      <TextInput
        editable
        multiline
        numberOfLines={1}
        maxLength={40}
        onChangeText={onChangeText}
        value={email}
        style={tw`text-black bg-white w-3/4 p-1 text-center shadow-2xl rounded-4 mt-3`}
        placeholder="Search what you need!!"
        placeholderTextColor="gray"
      />
    </View>
  )
}
