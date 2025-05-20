import { View, Text, Image } from 'react-native'
import React from 'react'
import { Marker } from 'react-native-maps'
import puck  from '@/assets/images/you.png'

const UserPuck = ({userLocation}) => {
  return (
    <Marker 
    anchor={{ x: 1, y: 1 }}
    image={require('@/assets/images/you.png')}
    style={{height: 30, width: 30}}
    coordinate={{
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude
      }}
      title="You are here"
      description="Your current location"
    />
  )
}

export default UserPuck