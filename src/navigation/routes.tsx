import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../theme'
import RouteNames from './RouteNames'
import Home from '../screens/Home'
import NewBeer from '../screens/NewBeer'
import Detail from '../screens/Detail'

const Stack = createStackNavigator()

export default function Routes (): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <NavigationContainer>
        <Stack.Navigator
          headerMode='none'
        >
          <Stack.Screen
            name={RouteNames.RoutesStack.Home}
            component={Home}
            options={{
            }}
          />
          <Stack.Screen
            name={RouteNames.RoutesStack.NewBeer}
            component={NewBeer}
            options={{
            }}
          />
          <Stack.Screen
            name={RouteNames.RoutesStack.Detail}
            component={Detail}
            options={{
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
