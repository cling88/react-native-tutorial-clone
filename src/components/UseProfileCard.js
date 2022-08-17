import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const UseProfileCard = ({ title, username, coverImage, avatar, verified }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={{ uri: coverImage }} style={styles.coverImage} />
      </View>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.bottomContainer}>
        <View style={styles.usernameDetails}>
          <Text style={styles.title}>{title}</Text>
          {
            verified &&
            <MaterialCommunityIcons name="check-decagram" size={20} color={"rgb(0, 122, 255)"} style={styles.icon}/>
          }
        </View>
        <Text style={styles.username}>{username}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250, 
    height: 230,
    marginHorizontal: 10,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 10
    },
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 3.41,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  topContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden'
  },
  coverImage: {
    width: 250,
    height: 115,
  },
  avatar: {
    position: 'absolute',
    top: 90,
    left: 100,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#fff'
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden'
    
  },
  usernameDetails: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    marginBottom: 5,
  },
  username: {
    color: 'rgb(0, 122, 255)'
  },
  icon: {
    marginLeft: 10
  }
})

export default UseProfileCard