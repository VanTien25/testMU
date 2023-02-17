import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Loader from '../common/Loader'
import { TouchableOpacity } from 'react-native'

const Home = () => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <TouchableOpacity style={{
          width: '20%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
          source={require('../images.home.png')}
          style={{ width: 24, height: 24}} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home