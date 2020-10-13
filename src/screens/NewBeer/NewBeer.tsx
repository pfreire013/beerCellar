import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import TopNav from '../../components/TopNav'
import RouteNames from '../../navigation/RouteNames'
import { RootState } from '../../redux'
import { getStyles, addBeer } from '../../redux/beers'
import Modal from 'react-native-modal'
import * as Yup from 'yup'

import { Container, MainScroll, Subtitle, TextInput, TextInputBigger, TouchSubmit, TextSubmit, RadioButtonContainer, RadioButton, RadioInputContainer, RadioText } from './styles'
import ModalSelected from '../../components/ModalSelected'

interface Value {
  name: string,
  styleId: number,
  description: string,
  abv: string,
  ibu: string,
  organic: string,
  required: string,
  foodPairings: string
}

const NewBeer = ({ addBeer, getStyles, styles }: PropsFromRedux) => {
  const [styleIdValue, setStyleIdValue] = useState<number | string>('')
  const [isModalVisible, setModalVisible] = useState(false)
  const [isOrganic, setIsOrganic] = useState(false)
  const [isRequired, setIsRequired] = useState(false)

  useEffect(() => {
    getStyles()
  }, [])

  const handleOnSubmit = async (value: Value) => {
    if (styleIdValue === 0) {
      Alert.alert('Styled is required!')
    }

    try {
      await addBeer({
        name: value.name,
        styleId: Number(styleIdValue),
        description: value.description,
        abv: value.abv,
        ibu: value.ibu,
        isOrganic: isOrganic ? 'Y' : 'N',
        isRetired: isRequired ? 'Y' : 'N',
        foodPairings: value.foodPairings
      })
    } catch (error) {
      Alert.alert('Error to create a new beer!')
    }
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <Container>
      <TopNav title={RouteNames.RoutesStack.NewBeer} />
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ModalSelected
            data={styles}
            type='style'
            value={styleIdValue}
            onChange={setStyleIdValue}
            onClose={toggleModal}
          />
        </View>
      </Modal>
      <MainScroll>
        <Formik
          onSubmit={(value) => handleOnSubmit(value)}
          initialValues={{
            name: '',
            styleId: '',
            description: '',
            abv: '',
            ibu: '',
            organic: '',
            required: '',
            foodPairings: ''
          }}
          validationSchema={
            Yup.object().shape({
              name: Yup.string().required('Name is required'),
              styleId: Yup.number(),
              description: Yup.string(),
              abv: Yup.string(),
              ibu: Yup.string(),
              organic: Yup.string(),
              required: Yup.string(),
              foodPairings: Yup.string()
            })
          }
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <>
              <Subtitle>Name</Subtitle>
              <TextInput
                placeholder='Name'
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
              />
              {touched.name && errors.name &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>}
              <Subtitle>Styles ID</Subtitle>
              <TextInput
                onFocus={toggleModal}
                placeholder='Select style id'
                value={String(styleIdValue)}
              />
              <Subtitle>Description</Subtitle>
              <TextInputBigger
                placeholder='Description'
                multiline
                value={values.description}
                onChangeText={handleChange('description')}
              />
              <Subtitle>ABV</Subtitle>
              <TextInput
                placeholder='ABV'
                value={values.abv}
                onChangeText={handleChange('abv')}
              />
              <Subtitle>IBU</Subtitle>
              <TextInput
                placeholder='IBU'
                value={values.ibu}
                onChangeText={handleChange('ibu')}
              />
              <Subtitle>Organic</Subtitle>
              <RadioInputContainer>
                <RadioButtonContainer>
                  <RadioButton
                    selected={isOrganic}
                    onPress={() => setIsOrganic(!isOrganic)}
                  />
                  <RadioText>Yes</RadioText>
                </RadioButtonContainer>

                <RadioButtonContainer>
                  <RadioButton
                    selected={!isOrganic}
                    onPress={() => setIsOrganic(!isOrganic)}
                  />
                  <RadioText>No</RadioText>
                </RadioButtonContainer>
              </RadioInputContainer>
              <Subtitle>Required</Subtitle>
              <RadioInputContainer>
                <RadioButtonContainer>
                  <RadioButton
                    selected={isRequired}
                    onPress={() => setIsRequired(!isRequired)}
                  />
                  <RadioText>Yes</RadioText>
                </RadioButtonContainer>

                <RadioButtonContainer>
                  <RadioButton
                    selected={!isRequired}
                    onPress={() => setIsRequired(!isRequired)}
                  />
                  <RadioText>No</RadioText>
                </RadioButtonContainer>
              </RadioInputContainer>
              <Subtitle>Food Pairings</Subtitle>
              <TextInputBigger
                placeholder='Food Pairings'
                multiline
                value={values.foodPairings}
                onChangeText={handleChange('foodPairings')}
              />
              <TouchSubmit
                onPress={handleSubmit}
              >
                <TextSubmit>Create</TextSubmit>
              </TouchSubmit>
            </>
          )}
        </Formik>
      </MainScroll>
    </Container>
  )
}

const mapStateToProps = (state: RootState) => ({
  styles: state.beers.styles?.result
})

const connector = connect(mapStateToProps, {
  getStyles,
  addBeer
})

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(NewBeer)
