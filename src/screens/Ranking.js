import React from 'react'
import { View, Image, StyleSheet, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Picker from '../components/Picker'
import Stat from '../components/Stat'

const Ranking = () => {
  return (
    <View style={styles.container}>
      {/* picker start */}
      <View style={styles.top}>
        <Picker
          leftItem={<Image style={styles.image} source={{ uri: 'https://picsum.photos/200?random=' + Math.floor((Math.random() * 9 + 1)) }} />}
          label="All categories"
        />
        <Picker 
          leftItem={<Ionicons name="link" size={24} color={"gray"} />}
          name="link-outline" size={24} color={"gray"} label="All chains" />
      </View>
      {/* picker end */}
      {/* main start */}
      <ScrollView style={styles.main}>
        <Stat
          type={"rankings"}
          image={'https://picsum.photos/200?random=' + Math.floor((Math.random() * 9 + 1))}
          username={"CLONE X - X TAKASHI MURAKAMI"}
          price={"35977.13"}
          order={1}
        />
        <Stat
          type={"rankings"}
          image={'https://picsum.photos/200?random=' + Math.floor((Math.random() * 9 + 1))}
          username={"CLONE X - X TAKASHI MURAKAMI"}
          price={"35977.13"}
          order={2}
        />
        <Stat
          type={"rankings"}
          image={'https://picsum.photos/200?random=' + Math.floor((Math.random() * 9 + 1))}
          username={"CLONE X - X TAKASHI MURAKAMI"}
          price={"35977.13"}
          order={3}
        />
      </ScrollView>
      {/* main end */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    marginVertical: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 20,
    height: 20
  },
  main: {
    borderTopWidth: 1,
    borderTopColor: '#ccc '
  }
})

export default Ranking