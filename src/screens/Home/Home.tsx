import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import BeerCard from '../../components/BeerCard'
import { RootState } from '../../redux'
import { getBeers } from '../../redux/beers'
import { Beer } from '../../redux/beers/types'

import { Container, MainScroll } from './styles'

const Home = ({ beers }: { beers: Beer[]}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <MainScroll>
          {
            beers.map(beer => (
              <BeerCard key={beer.id} beer={beer} />
            ))
          }
        </MainScroll>
      </Container>
    </SafeAreaView>
  )
}

const HomeContainer = ({ getBeers, beers }: PropsFromRedux) => {
  useEffect(() => {
    getBeers()
  }, [])

  return (
    <Home
      beers={beers}
    />
  )
}

const mapStateToProps = (state: RootState) => ({
  beers: state.beers.beers.result
})

const connector = connect(mapStateToProps, {
  getBeers
})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HomeContainer)
