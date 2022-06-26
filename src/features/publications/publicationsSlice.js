import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { API } from '../../api/client'

export const fetchPublications = createAsyncThunk('publications/fetchPublications',
  async () => {
    const response = await API.get('/publications')
    return response.data
  }
)

const initialState = {
  publications: [],
  status: 'idle',
  error: null
}

const publicationsSlice = createSlice({
  name: 'publications',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchPublications.fulfilled, (state, action) => {
        state.publications = state.publications.concat(action.payload)
        state.status = 'fulfilled'
      })
  }
})

export default publicationsSlice.reducer