import {configureStore} from "@reduxjs/toolkit" 
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from "./reducers"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
  }


export const store = configureStore({
    reducer :persistReducer(persistConfig, rootReducer)
    
})

export const persistor = persistStore(store)