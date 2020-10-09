import { combineReducers } from 'redux'
import beers from './beers'

export const reducersMap = {
  beers
}

const rootReducer = combineReducers(reducersMap)

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
