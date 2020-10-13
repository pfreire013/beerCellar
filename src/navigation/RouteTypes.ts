import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Beer } from '../redux/beers/types'
import RouteNames from './RouteNames'

export type RootRoutesParamList = {
  [RouteNames.RoutesStack.Home]: undefined;
  [RouteNames.RoutesStack.Detail]: { beer: Beer};
  [RouteNames.RoutesStack.NewBeer]: undefined;
}

export type HomeScreenNavigationProp = StackNavigationProp<
  RootRoutesParamList,
  typeof RouteNames.RoutesStack.Home
>

export type DetailScreenRouteProp = RouteProp<RootRoutesParamList, typeof RouteNames.RoutesStack.Detail>
