import React from 'react'

import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'

const Tab = createMaterialTopTabNavigator()

import Ranking from './Ranking'
import Activity from './Activity'

const Stats = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: 16
        },
        tabBarItemStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        tabBarIndicatorStyle: {
          backgroundColor: "rgb(0,122,255)",
          height: 5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }
      }}
    >
      <Tab.Screen 
        name="Rankings" 
        component={Ranking} 
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name="stats-chart"
              size={20}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen 
        name="Activity" 
        component={Activity} 
        options={{
          tabBarIcon: ({color}) => (
            <SimpleLineIcons
              name="graph"
              size={20}
              color={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Stats