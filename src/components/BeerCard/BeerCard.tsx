import React from 'react'
import { Beer } from '../../redux/beers/types'

import { Container, Title, Name, Category } from './styles'

interface Props {
  beer: Beer
}
const BeerCard: React.FC<Props> = ({ beer }) => {
  return (
    <Container>
      <Title>{beer.name && beer.name}</Title>
      <Name>{beer.style?.shortName}</Name>
      {/* Status icon */}
      <Category>{beer.style?.category.name}</Category>
    </Container>
  )
}

export default BeerCard
