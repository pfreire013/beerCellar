import styled from 'styled-components/native'
import theme from '../../theme'

export const Container = styled.TouchableOpacity`
  height: 100px;
  width: 100%;
  background: ${theme.color.white};
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  elevation: 4;
  border-radius: 10px;
  padding: 12px 20px;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.color.black};
  margin-bottom: 8px;
`

export const Name = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.highGrey};
  margin-bottom: 4px;
`

export const Category = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.color.highGrey};
`
