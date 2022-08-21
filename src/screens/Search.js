import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SearchInput from '../components/SearchInput'
import Card from '../components/Card'
import Section from '../components/Section'
// data
import data from '../data/mockData'

const Search = () => {
  return (
    <View style={styles.container}>
      <SearchInput  />
      <Section
        title="All categories"
        DataComponent={Card}
        data={data.categories}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default Search