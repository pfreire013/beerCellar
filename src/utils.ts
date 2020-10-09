import { StoreType } from './configureStore'
let _store : StoreType

export function setStore (store: StoreType) : void {
  _store = store
}
