import React from 'react'
import { Pressable, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import Home from '../screens/Home'
import Stats from '../screens/Stats'
import Search from '../screens/Search'
import Profile from '../screens/Profile'
import More from '../screens/More'

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitle: "OpenSea",
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 22  
                },
                tabBarStyle: {
                    height: 70
                },
                tabBarItemStyle: {
                    paddingTop: 20
                },
                tabBarButton: ({ 
                    accessibilityState, 
                    style, 
                    children, 
                    ...props 
                }) => (
                    <Pressable
                        accessibilityState={accessibilityState}
                        {...props}    
                        style={style}
                    >
                        {
                            accessibilityState.selected && <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                height: 8,
                                width: '50%',
                                backgroundColor: 'blue',
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                            }}
                        ></View>
                        }
                        {children}
                    </Pressable>
                ),
            }}
        >
             <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({color, size}) => <Feather name="search" size={size} color={color} />
            }} />
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({color, size}) => <Entypo name="home" size={size} color={color} />
            }}/>
            <Tab.Screen name="Stats" component={Stats} options={{
                tabBarIcon: ({color, size}) => <Ionicons name="stats-chart" size={size} color={color} />
            }} />
            {/* <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({color, size}) => <Feather name="search" size={size} color={color} />
            }} /> */}
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account-circle-outline" size={size} color={color} />
            }} />
            <Tab.Screen name="More" component={More} options={{
                tabBarIcon: ({color, size}) => <Entypo name="menu" size={size} color={color} />
            }} />
        </Tab.Navigator>
    )
}

export default AppNavigator