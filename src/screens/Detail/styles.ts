import styled from 'styled-components/native'
import theme from '../../theme'

export const Container = styled.View`
  flex: 1;
  background: ${theme.color.white};
`

export const MainScroll = styled.ScrollView`
  padding-horizontal: 24px;
`

export const Header = styled.View`
   flex-direction: row;
   margin-bottom: 32px;
`

export const ImageBeer = styled.Image`
  height: 90px;
  width: 90px;
  background: ${theme.color.lowGrey};
  border-radius: 50px;
  margin-right: 24px;
`

export const Info = styled.View``

export const Name = styled.Text`
  font-size: 20px;
  color: ${theme.color.black};
  font-weight: bold;
  margin-bottom: 16px;
`

export const Row = styled.View`
  flex-direction: row;
`

export const Card = styled.View`
  padding: 8px 12px;
  background: ${theme.color.primary};
  border-radius: 10px;
  margin-right: 12px;
  flex-direction: row;
  align-items: center;
`

export const CardTitle = styled.Text`
  font-size: 14px;
  color: ${theme.color.white};
  font-weight: bold;
  margin-right: 8px;
`

export const CardValue = styled.Text`
  font-size: 14px;
  color: ${theme.color.secondary};
  font-weight: bold;
`

export const StyleName = styled.Text`
  font-size: 18px;
  color: ${theme.color.black};
  font-weight: bold;
  margin-bottom: 8px;
`

export const Category = styled.Text`
  font-size: 16px;
  color: ${theme.color.highGrey};
  font-weight: bold;
  margin-bottom: 8px;
`

export const Description = styled.Text`
  font-size: 16px;
  color: ${theme.color.highGrey};
  font-weight: normal;
  margin-bottom: 40px;
`

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${theme.color.black};
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 20px;
`

export const FoodPairings = styled.Text`
  font-size: 16px;
  color: ${theme.color.highGrey};
  font-weight: normal;
`
