import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import BeerCard from '../../components/BeerCard'
import RouteNames from '../../navigation/RouteNames'
import { HomeScreenNavigationProp } from '../../navigation/RouteTypes'
import { RootState } from '../../redux'
import { getBeers } from '../../redux/beers'
import { Beer } from '../../redux/beers/types'
import Services from '../../Services'

import { Container, Header, SearchContainer, IconSearch, InputSearch, MainScroll, Title, TouchNewBeer, IconAdd, TextNewBeer, TouchMore, TextMore } from './styles'

interface Props {
  beers: Beer[],
  navigationToNewBeer: () => void
  onMore: () => void
  onSearch: (text: string) => void
  searchBeer: Beer[] | undefined
  isInSearch: boolean
}
const Home: React.FC<Props> = ({ beers, navigationToNewBeer, onMore, onSearch, searchBeer, isInSearch }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header>
          <Title>Home</Title>
          <TouchNewBeer
            activeOpacity={0.6}
            onPress={navigationToNewBeer}
          >
            <IconAdd />
            <TextNewBeer>New Beer</TextNewBeer>
          </TouchNewBeer>
        </Header>
        <SearchContainer>
          <IconSearch />
          <InputSearch
            placeholder='Search the beer name...'
            onChangeText={(text: string) => onSearch(text)}
          />
        </SearchContainer>
        <MainScroll
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          {
            beers && !isInSearch && beers.map(beer => (
              <BeerCard key={beer.id} beer={beer} />
            ))
          }
          {
            searchBeer && isInSearch && searchBeer.map(beer => (
              <BeerCard key={beer.id} beer={beer} />
            ))
          }
          <TouchMore
            onPress={onMore}
          >
            <TextMore>More</TextMore>
          </TouchMore>
        </MainScroll>
      </Container>
    </SafeAreaView>
  )
}

const HomeContainer = ({ getBeers, beers }: PropsFromRedux) => {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const [pagination, setPagination] = useState<number>(1)
  const [isInSearch, setIsInSearch] = useState(false)
  const [searchBeer, setSearchBeer] = useState<Beer[] | null>()

  useEffect(() => {
    setPagination(1)
    getBeers(pagination)
  }, [])

  function handleNavigationToNewBeer () {
    navigation.navigate(RouteNames.RoutesStack.NewBeer)
  }

  function handleMore () {
    getBeers(pagination + 1)
    setPagination(pagination + 1)
  }

  function handleSearch (name: string) {
    if (name === '') {
      setIsInSearch(false)
      setSearchBeer(null)
    }
    if (name !== '') {
      setIsInSearch(true)
    }
    Services.getBeerSearch(name).then(res => {
      console.log(res)
      if (res.data.data) {
        setSearchBeer(res.data.data)
      } else {
        setSearchBeer(null)
      }
    })
  }

  return (
    <Home
      beers={beers}
      navigationToNewBeer={handleNavigationToNewBeer}
      onMore={handleMore}
      onSearch={handleSearch}
      searchBeer={searchBeer}
      isInSearch={isInSearch}
    />
  )
}

const mapStateToProps = (state: RootState) => ({
  beers: state.beers.beers?.result
})

const connector = connect(mapStateToProps, {
  getBeers
})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HomeContainer)
