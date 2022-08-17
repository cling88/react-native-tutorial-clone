import React from 'react'  
import { View, Text, StyleSheet, Image } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const Avatar = ({ image, size=50, online, circle }) => {
  return (
    <View style={[
      styles.container,
      {
        width: size,
        height: size
      }
    ]}>
      { circle && online && <MaterialCommunityIcons 
          style={[
            styles.icons,
            {
              left: size * 0.75,
              top: size * 0.02
            }
          ]} 
          name="circle" 
          color={"green"} 
          size={15} 
        /> }
      <Image source={{ uri: image }} style={{
          width: size,
          height: size,
          borderRadius: circle ? size/2 : size/8,
          borderWidth: 0.5
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons : {
    position: 'absolute',
    left: 20,
    zIndex: 1
  }
})

export default Avatar