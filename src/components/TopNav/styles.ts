import styled from 'styled-components/native'
import theme from '../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export const Container = styled.View`
  width: 100%;
  background: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-vertical: 20px;
`

export const TouchBack = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
`

export const IconBack = styled(FontAwesomeIcon).attrs({
  color: theme.color.black,
  size: 20
})`
`

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.color.black};
  font-weight: bold;
`
