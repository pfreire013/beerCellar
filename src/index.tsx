import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './configureStore'
import Routes from './navigation/routes'

const { persistor, store } = configureStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle='dark-content' backgroundColor='#ffffff' translucent />
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App
