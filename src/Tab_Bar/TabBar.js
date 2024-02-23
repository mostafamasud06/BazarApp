import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons' // Import icons from Expo
import tw from 'twrnc'

export default function TabBar({ navigateToAnotherPage }) {
  return (
    <View
      style={tw`absolute bottom-0 left-0 right-0 p-2 rounded-10 m-2 shadow-2xl flex-row justify-around items-center bg-white shadow-md`}>
      {/* Home Tab */}
      <TouchableOpacity
        onPress={navigateToAnotherPage}
        style={tw`flex-1 items-center`}>
        <AntDesign name="home" size={20} color="black" />
        <Text style={tw`text-xs`}>Home</Text>
      </TouchableOpacity>

      {/* Services Tab */}
      <TouchableOpacity
        onPress={navigateToAnotherPage}
        style={tw`flex-1 items-center`}>
        <Feather name="box" size={20} color="black" />
        <Text style={tw`text-xs`}>Services</Text>
      </TouchableOpacity>

      {/* Cart Tab */}
      <TouchableOpacity
        onPress={navigateToAnotherPage}
        style={tw`flex-1 items-center`}>
        <Ionicons name="cart-outline" size={20} color="black" />
        <Text style={tw`text-xs`}>Cart</Text>
      </TouchableOpacity>

      {/* Profile Tab */}
      <TouchableOpacity
        onPress={navigateToAnotherPage}
        style={tw`flex-1 items-center`}>
        <AntDesign name="user" size={20} color="black" />
        <Text style={tw`text-xs`}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}
