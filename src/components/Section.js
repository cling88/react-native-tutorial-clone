import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Section = ({ title, DataComponent, data }) => {
  return (
    <View style={styles.container}>
        { title && <Text style={styles.sectionTitle}>{title}</Text> }
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            data.map((item, idx) => <DataComponent key={`${title}_${idx}`} {...item} />)
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    sectionTitle: {
        marginBottom: 10,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: 0.2
    }
})

export default Section