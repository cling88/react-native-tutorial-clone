import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons'

const Picker = ({ leftItem, label }) => {
  return (
    <TouchableOpacity style={styles.container}>
       { leftItem }
       <Text style={styles.label}>{ label }</Text>
       <Entypo style={styles.icon} name="chevron-down" size={24} color={"gray"} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: '#ccc',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginHorizontal: 10,
        width: '46%'
    },
    label: {
        paddingHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
})

export default Picker