import { View, ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'

import Card from '../components/Card'
import NFTCard from '../components/NFTCard'
import Avatar from '../components/Avatar'
import UseProfileCard from '../components/UseProfileCard'

import Section from '../components/Section'

// data
import data from '../data/mockData'

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Section
        DataComponent={Card}
        data={data.categories}
      />
      <Section
        title="Notable Drops"
        DataComponent={Card}
        data={data.notableDrops}
      />
      <Section
        title="Trending collections"
        DataComponent={UseProfileCard}
        data={data.users}
      />
      <Section
        title="Hot new items"
        DataComponent={NFTCard}
        data={data.nfts}
      />
      <Section
        title="Expiring Soon"
        DataComponent={NFTCard}
        data={data.nfts}
      />
      <Section
        title="New Top Sellers"
        DataComponent={NFTCard}
        data={data.nfts}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
})

export default Home