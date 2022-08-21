import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons'

const SearchInput = () => {
  return (
    <View style={styles.container}>
        <Feather name="search" size={24} color={"grey"} style={styles.icon} />
       <TextInput style={styles.input} placeholder={"Search items"} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        height: 60,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10
    },
    icon: {
        padding: 10
    },
    input : {
        height: 60,
        width: '85%',
        paddingLeft: 10
    }
})

export default SearchInput