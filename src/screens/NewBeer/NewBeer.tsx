import { Formik } from 'formik'
import React, { useEffect } from 'react'
import { Alert, Text } from 'react-native'
import { connect, ConnectedProps } from 'react-redux'
import TopNav from '../../components/TopNav'
import RouteNames from '../../navigation/RouteNames'
import { RootState } from '../../redux'
import { getStyles, addBeer } from '../../redux/beers'
import { Style } from '../../redux/beers/types'
import * as Yup from 'yup'

import { Container, MainScroll, Subtitle, TextInput, TextInputBigger, TouchSubmit, TextSubmit } from './styles'

const NewBeer = ({ addBeer, getStyles, styles }: PropsFromRedux) => {
  useEffect(() => {
    getStyles()
  }, [])

  const handleOnSubmit = async ({ name, styleId }) => {
    try {
      await addBeer({ name, styleId })
    } catch (error) {
      Alert.alert('Error to create a new beer!')
    }
  }

  return (
    <Container>
      <TopNav title={RouteNames.RoutesStack.NewBeer} />
      <MainScroll>
        <Formik
          onSubmit={handleOnSubmit}
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
              styleId: Yup.string().required('Name is required'),
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
              <Subtitle>Styles</Subtitle>
              <TextInput
                placeholder='Styles'
                value={values.styleId}
                onChangeText={handleChange('styleId')}
              />
              {touched.styleId && errors.styleId &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.styleId}</Text>}
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
              <TextInput
                placeholder='Organic'
                value={values.organic}
                onChangeText={handleChange('organic')}
              />
              <Subtitle>Required</Subtitle>
              <TextInput
                placeholder='Required'
                value={values.required}
                onChangeText={handleChange('required')}
              />
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
