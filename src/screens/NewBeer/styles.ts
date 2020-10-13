import styled from 'styled-components/native'
import theme from '../../theme'

export const Container = styled.View`
  flex: 1;
  background: ${theme.color.white};
`

export const MainScroll = styled.ScrollView`
  flex: 1;
  padding-horizontal: 24px;
`

export const TextInput = styled.TextInput`
  background: ${theme.color.lowGrey};
  height: 50px;
  width: 100%;
  border-radius: 10px;
  padding-horizontal: 24px;
  margin-top: 8px;
`

export const InputDrop = styled.Picker.attrs({
})`
  background: ${theme.color.lowGrey};
  height: 50px;
  width: 100%;
  border-radius: 10px;
`

export const TextInputBigger = styled.TextInput`
  background: ${theme.color.lowGrey};
  height: 100px;
  width: 100%;
  border-radius: 10px;
  margin-top: 8px;
  margin-bottom: 20px;
  padding: 12px 24px;
`

export const Subtitle = styled.Text`
  font-size: 14px;
  color: ${theme.color.highGrey};
  font-weight: 500;
  margin-top: 20px;
`

export const TouchInput = styled.TouchableOpacity`
`

export const TouchSubmit = styled.TouchableOpacity`
  height: 60px;
  background: ${theme.color.primary};
  justify-content: center;
  align-items: center;
  align-self: center;
  padding-horizontal: 24px;
  border-radius: 10px;
`

export const TextSubmit = styled.Text`
  font-size: 18px;
  color: ${theme.color.white};
  font-weight: bold;
`

export const RadioInputContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 20px;
`

export const RadioButtonContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
`

export const RadioButton = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  background: ${(props: {selected: boolean}) => props.selected ? theme.color.primary : theme.color.white};
  border-width: 2px;
  border-color: ${theme.color.primary};
  border-radius: 100px;
  margin-right: 16px;
`

export const RadioText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${theme.color.highGrey};
`
