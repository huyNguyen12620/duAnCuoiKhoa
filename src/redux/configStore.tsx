import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/productReducer'
import registerReducer from './reducers/ListDanhmucReducer'
import userReducer from './reducers/userReducer'
import ListDanhmucReducer from './reducers/ListDanhmucReducer'
// ...

export const store = configureStore({
  reducer: {
    productReducer:productReducer,
    userReducer:userReducer,
    ListDanhmucReducer:ListDanhmucReducer,
  
    
  
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch