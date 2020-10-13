import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { Container, TouchBack, IconBack, Title } from './styles'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

interface Props {
  title: string
}

const TopNav: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation()

  function handleNavigationToBack () {
    navigation.goBack()
  }
  return (
    <Container>
      <TouchBack
        activeOpacity={0.6}
        onPress={handleNavigationToBack}
      >
        <IconBack icon={faAngleLeft} />
      </TouchBack>
      <Title>{title}</Title>
    </Container>
  )
}

export default TopNav
