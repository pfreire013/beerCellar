import { Dispatch } from 'redux'
import Services from '../../Services'
import { Beer, BeersActionTypes, BeersState, GET_BEERS_FAILURE, GET_BEERS_REQUEST, GET_BEERS_SUCCESS } from './types'

export const initialState: BeersState = {
  _incrementToPurge: 0,
  beers: {
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
          result: action.payload,
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

/** ****** UTILS *****/

/** ****** SELECTORS *****/

/** ************* ASYNC ACTIONS ************ **/

export function getBeers () {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(getBeersRequest())
      const { data: responseBody } = await Services.getBeers()
      dispatch(getBeersSuccess(responseBody.data))
    } catch (error) {
      dispatch(getBeersFailure(error.message))
    }
  }
}
