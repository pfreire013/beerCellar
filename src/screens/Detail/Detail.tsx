import { useRoute } from '@react-navigation/native'
import React from 'react'
import TopNav from '../../components/TopNav'
import RouteNames from '../../navigation/RouteNames'
import { DetailScreenRouteProp } from '../../navigation/RouteTypes'

import { Container, MainScroll, ImageBeer, Info, Name, Row, Card, CardTitle, CardValue, Header, StyleName, Category, Description, FoodPairings, Subtitle } from './styles'

const Detail: React.FC = () => {
  const route = useRoute<DetailScreenRouteProp>()
  const { beer } = route.params
  return (
    <Container>
      <TopNav title={RouteNames.RoutesStack.Detail} />
      <MainScroll
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Header>
          <ImageBeer />
          <Info>
            <Name>{beer.name}</Name>
            <Row>
              {
                beer.abv && (
                  <Card>
                    <CardTitle>ABV:</CardTitle>
                    <CardValue>{beer.abv}</CardValue>
                  </Card>
                )
              }
              {
                beer.ibu && (
                  <Card>
                    <CardTitle>IBU:</CardTitle>
                    <CardValue>{beer.ibu}</CardValue>
                  </Card>
                )
              }
            </Row>
          </Info>
        </Header>
        <StyleName>{beer.style.name}</StyleName>
        <Category>{beer.style.category.name}</Category>
        <Description>
          {beer.style.description}
        </Description>

        <Row>
          <Card>
            <CardTitle>Organic:</CardTitle>
            <CardValue>{beer.isOrganic === 'N' ? 'No' : 'Yes'}</CardValue>
          </Card>
          <Card>
            <CardTitle>Retired:</CardTitle>
            <CardValue>{beer.isRetired === 'N' ? 'No' : 'Yes'}</CardValue>
          </Card>
        </Row>
        {
          beer.foodPairings && (
            <>
              <Subtitle>Food Pairings</Subtitle>
              <FoodPairings>{beer.foodPairings}</FoodPairings>
            </>
          )
        }
      </MainScroll>
    </Container>
  )
}

export default Detail
