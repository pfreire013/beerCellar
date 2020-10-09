import { persistStore, persistReducer, createTransform, Persistor } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { createStore, applyMiddleware, Action, AnyAction } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction, ThunkMiddleware } from 'redux-thunk'
import reducers, { reducersMap, RootState } from './redux'
import { RootStateOrAny } from 'react-redux'
import { setStore } from './utils'

const outbound = (outboundState: RootStateOrAny, key: keyof typeof reducersMap) => {
  try {
    const reducer = reducersMap[key]
    if (typeof reducer === 'function') {
      const newInitialState = reducer()
      if ((outboundState._incrementToPurge || 0) < newInitialState._incrementToPurge) {
        return
      }
    }
  } catch (error) {
    console.log(error)
  }
  return { ...outboundState }
}
const PurgeReducerOnVersionTransform = createTransform(null, outbound)

const config = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [PurgeReducerOnVersionTransform]
}

const reducer = persistReducer<RootState, AnyAction>(config, reducers)
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState, Action<string>>)))
setStore(store)

export type StoreType = typeof store

const configureStore = () : { persistor: Persistor, store: StoreType } => {
  const persistor = persistStore(store)
  return { persistor, store }
}

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, Action<string>>;

export default configureStore
