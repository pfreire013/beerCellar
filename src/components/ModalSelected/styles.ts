import styled from 'styled-components/native'
import theme from '../../theme'

export const Container = styled.View`
  background: ${theme.color.white};
  height: 300px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`

export const Footer = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`

export const TouchConfirm = styled.TouchableOpacity`
  height: 50px;
  width: 40%;
  background: ${theme.color.primary};
  border-radius: 10px;
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
`

export const TextConfirm = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.color.secondary};
`

export const TouchCancel = styled.TouchableOpacity`
  height: 50px;
  width: 40%;
  background: ${theme.color.white};
  border-width: 2px;
  border-color: ${theme.color.primary};
  border-radius: 10px;
  margin-horizontal: 8px;
  justify-content: center;
  align-items: center;
`

export const TextCancel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.color.primary};
`
