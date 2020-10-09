import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../theme'
import RouteNames from './RouteNames'
import Home from '../screens/Home'
import NewBeer from '../screens/NewBeer'
import Detail from '../screens/Detail'

const Tab = createBottomTabNavigator()

export default function Routes (): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: theme.color.primary,
            inactiveTintColor: theme.color.mediumGrey
          }}
        >
          <Tab.Screen
            name={RouteNames.TabStack.Home}
            component={Home}
            options={{
            }}
          />
          <Tab.Screen
            name={RouteNames.TabStack.NewBeer}
            component={NewBeer}
            options={{
            }}
          />
          <Tab.Screen
            name={RouteNames.TabStack.Detail}
            component={Detail}
            options={{
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
