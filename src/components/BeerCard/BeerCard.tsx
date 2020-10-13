import { useNavigation } from '@react-navigation/native'
import React from 'react'
import RouteNames from '../../navigation/RouteNames'
import { HomeScreenNavigationProp } from '../../navigation/RouteTypes'
import { Beer } from '../../redux/beers/types'

import { Container, Title, Name, Category } from './styles'

interface Props {
  beer: Beer
}
const BeerCard: React.FC<Props> = ({ beer }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  function handleNavigationToDetail () {
    navigation.navigate(RouteNames.RoutesStack.Detail, { beer: beer })
  }

  return (
    <Container
      activeOpacity={0.6}
      onPress={handleNavigationToDetail}
    >
      <Title>{beer.name && beer.name}</Title>
      <Name>{beer.style?.shortName}</Name>
      {/* Status icon */}
      <Category>{beer.style?.category.name}</Category>
    </Container>
  )
}

export default BeerCard
