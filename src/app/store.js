import { configureStore } from '@reduxjs/toolkit'

import publicationsReducer from '../features/publications/publicationsSlice'

const store = configureStore({
  reducer: {
    publications: publicationsReducer
  }
})

export default store