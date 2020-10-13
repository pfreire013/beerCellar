import styled from 'styled-components/native'
import theme from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

export const Container = styled.View`
  flex: 1;
  background: ${theme.color.white};
`

export const MainScroll = styled.ScrollView`
  flex: 1;
  background: transparent;
  padding-horizontal: 24px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 24px;
  align-items: center;
  margin-vertical: 10px;
`

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.color.black};
  font-weight: bold;
`

export const TouchNewBeer = styled.TouchableOpacity`
  padding: 12px 24px;
  background: ${theme.color.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  elevation: 4;
  border-radius: 50px;
`

export const IconAdd = styled(FontAwesomeIcon).attrs({
  icon: faPlus,
  size: 20,
  color: theme.color.white
})`
margin-right: 12px;
`

export const TextNewBeer = styled.Text`
  font-size: 18px;
  color: ${theme.color.white};
  font-weight: bold;
`

export const TouchMore = styled.TouchableOpacity`
  padding: 12px 24px;
  background: ${theme.color.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  elevation: 4;
  border-radius: 50px;
  align-self: center;
`

export const TextMore = styled.Text`
  font-size: 18px;
  color: ${theme.color.secondary};
  font-weight: bold;
`

export const SearchContainer = styled.View`
  height: 40px;
  background: ${theme.color.white};
  padding-horizontal: 24px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 8px;
`

export const IconSearch = styled(FontAwesomeIcon).attrs({
  icon: faSearch,
  size: 20,
  color: theme.color.black
})`
margin-right: 12px;
`

export const InputSearch = styled.TextInput`
  color: ${theme.color.black};
  flex: 1;
`
