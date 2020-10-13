import { Picker } from '@react-native-community/picker'
import React from 'react'
import { Style } from '../../redux/beers/types'

import { Container, Footer, TouchConfirm, TouchCancel, TextCancel, TextConfirm } from './styles'

interface Props {
  data?: Style[],
  type: 'style' | 'default'
  value: string | number,
  onChange: (value: string | number) => void
  onClose: () => void
}

const defaultData = [
  {
    id: 1,
    label: 'Yes',
    value: 'Y'
  },
  {
    id: 2,
    label: 'No',
    value: 'N'
  }
]

const ModalSelected: React.FC<Props> = ({ value, data, onChange, type, onClose }) => {
  return (
    <Container>
      <Picker
        selectedValue={value}
        style={{ height: 50, width: '90%' }}
        onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
      >
        {
          data && data.map(d => (
            <Picker.Item key={d.id} label={d.name} value={d.id} />
          ))
        }
      </Picker>
      <Footer>
        <TouchCancel
          onPress={onClose}
        >
          <TextCancel>Cancel</TextCancel>
        </TouchCancel>
        <TouchConfirm
          onPress={onClose}
        >
          <TextConfirm>Confirm</TextConfirm>
        </TouchConfirm>
      </Footer>
    </Container>
  )
}

export default ModalSelected
