import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'
import { Dispatch } from 'redux'
import RouteNames from '../../navigation/RouteNames'
import Services from '../../Services'
import { ADD_BEER, ADD_BEER_FAILURE, ADD_BEER_SUCCESS, Beer, BeersActionTypes, BeersState, GET_BEERS_FAILURE, GET_BEERS_REQUEST, GET_BEERS_SUCCESS, GET_STYLES_FAILURE, GET_STYLES_REQUEST, GET_STYLES_SUCCESS, newBeer, Style } from './types'

export const initialState: BeersState = {
  _incrementToPurge: 0,
  beers: {
    result: [],
    isPending: false,
    error: undefined
  },
  styles: {
    result: [],
    isPending: false,
    error: undefined
  }
}

export default function beersReducer (
  state = initialState,
  action: BeersActionTypes
): BeersState {
  switch (action.type) {
    case GET_BEERS_REQUEST:
      return {
        ...state,
        beers: {
          ...state.beers,
          isPending: true,
          error: undefined
        }
      }
    case GET_BEERS_SUCCESS:
      return {
        ...state,
        beers: {
          result: state.beers.result.concat(action.payload),
          isPending: false,
          error: undefined
        }
      }
    case GET_BEERS_FAILURE:
      return {
        ...state,
        beers: {
          ...state.beers,
          isPending: false,
          error: action.error
        }
      }
    case GET_STYLES_REQUEST:
      return {
        ...state,
        styles: {
          ...state.styles,
          isPending: true,
          error: undefined
        }
      }
    case GET_STYLES_SUCCESS:
      return {
        ...state,
        styles: {
          result: action.payload,
          isPending: false,
          error: undefined
        }
      }
    case GET_STYLES_FAILURE:
      return {
        ...state,
        beers: {
          ...state.beers,
          isPending: false,
          error: action.error
        }
      }
    default:
      return state
  }
}

/** ************* ACTION CREATORS ************ **/

export function getBeersRequest (): BeersActionTypes {
  return {
    type: GET_BEERS_REQUEST
  }
}

export function getBeersSuccess (beers: Beer[]): BeersActionTypes {
  return {
    type: GET_BEERS_SUCCESS,
    payload: beers
  }
}

export function getBeersFailure (error: string): BeersActionTypes {
  return {
    type: GET_BEERS_FAILURE,
    error: error
  }
}

export function getStylesRequest (): BeersActionTypes {
  return {
    type: GET_STYLES_REQUEST
  }
}

export function getStylesSuccess (styles: Style[]): BeersActionTypes {
  return {
    type: GET_STYLES_SUCCESS,
    payload: styles
  }
}

export function getStylesFailure (error: string): BeersActionTypes {
  return {
    type: GET_STYLES_FAILURE,
    error: error
  }
}

export function addBeerAction (newBeer: newBeer): BeersActionTypes {
  return {
    type: ADD_BEER,
    payload: newBeer
  }
}

export function addBeerSuccess (beer: Beer): BeersActionTypes {
  return {
    type: ADD_BEER_SUCCESS,
    payload: beer
  }
}

export function addBeerFailure (errorMessage: string): BeersActionTypes {
  return {
    type: ADD_BEER_FAILURE,
    error: errorMessage
  }
}

/** ****** UTILS *****/

/** ****** SELECTORS *****/

/** ************* ASYNC ACTIONS ************ **/

export function getBeers (pagination: number) {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getBeersRequest())
      const { data: responseBody } = await Services.getBeers(pagination)
      dispatch(getBeersSuccess(responseBody.data))
    } catch (error) {
      dispatch(getBeersFailure(error.message))
    }
  }
}

export function addBeer (newBeer: newBeer) {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(addBeerAction(newBeer))
      const { data: responseBody } = await Services.addBeer(newBeer)
      dispatch(addBeerSuccess(responseBody.data))
      Alert.alert('Create a new beer success!!')
    } catch (error) {
      console.log(error)
      dispatch(addBeerFailure(error.message))
    }
  }
}

export function getStyles () {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getStylesRequest())
      const { data: responseBody } = await Services.getStyles()
      dispatch(getStylesSuccess(responseBody.data))
    } catch (error) {
      dispatch(getStylesFailure(error.message))
    }
  }
}
