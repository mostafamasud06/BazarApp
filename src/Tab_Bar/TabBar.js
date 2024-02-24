import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons' // Import icons from Expo
import tw from 'twrnc'

export default function TabBar({ navigateToAnotherPage }) {
  const [activeTab, setActiveTab] = useState('home')

  // handleTabPress Function: This function is called when a tab is pressed.
  // It updates the activeTab state with the selected tab,
  // indicating which tab is currently active.

  const handleTabPress = (tab) => {
    setActiveTab(tab)
    navigateToAnotherPage(tab) // Pass the selected tab to the parent component
  }

  return (
    <View
      style={tw`absolute bottom-0 left-0 right-0 p-2 rounded-10 m-2 shadow-2xl flex-row justify-around items-center bg-white shadow-md`}>
      {/* Home Tab */}
      <TouchableOpacity
        onPress={() => handleTabPress('home')}
        style={[
          tw`flex-1 items-center`,
          activeTab === 'home' && { color: 'green' },
        ]}>
        <AntDesign
          name="home"
          size={20}
          color={activeTab === 'home' ? 'green' : 'black'}
        />
        <Text style={[tw`text-xs`, activeTab === 'home' && { color: 'green' }]}>
          Home
        </Text>
      </TouchableOpacity>

      {/* Services Tab */}
      <TouchableOpacity
        onPress={() => handleTabPress('services')}
        style={[
          tw`flex-1 items-center`,
          activeTab === 'services' && { color: 'green' },
        ]}>
        <Feather
          name="box"
          size={20}
          color={activeTab === 'services' ? 'green' : 'black'}
        />
        <Text
          style={[tw`text-xs`, activeTab === 'services' && { color: 'green' }]}>
          Services
        </Text>
      </TouchableOpacity>

      {/* Cart Tab */}
      <TouchableOpacity
        onPress={() => handleTabPress('cart')}
        style={[
          tw`flex-1 items-center`,
          activeTab === 'cart' && { color: 'green' },
        ]}>
        <Ionicons
          name="cart-outline"
          size={20}
          color={activeTab === 'cart' ? 'green' : 'black'}
        />
        <Text style={[tw`text-xs`, activeTab === 'cart' && { color: 'green' }]}>
          Cart
        </Text>
      </TouchableOpacity>

      {/* Profile Tab */}
      <TouchableOpacity
        onPress={() => handleTabPress('profile')}
        style={[
          tw`flex-1 items-center`,
          activeTab === 'profile' && { color: 'green' },
        ]}>
        <AntDesign
          name="user"
          size={20}
          color={activeTab === 'profile' ? 'green' : 'black'}
        />
        <Text
          style={[tw`text-xs`, activeTab === 'profile' && { color: 'green' }]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  )
}
