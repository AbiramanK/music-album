import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {logoutRequestAction} from '../actions/UserAction';
import {FETCH_ALBUMS} from '../Constant';

export interface AlbumInitialStateInterface {
  albums: any | undefined;
  isLoading: boolean;
  error: string;
}

const initialState: AlbumInitialStateInterface = {
  albums: undefined,
  isLoading: false,
  error: '',
};

const fetchAlbums = createAsyncThunk(FETCH_ALBUMS, () => {
  return fetch('https://itunes.apple.com/in/rss/topalbums/limit=50/json').then(
    res => res.json(),
  );
});

const AlbumSlice = createSlice({
  name: 'album',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchAlbums.pending, state => {
        state.isLoading = true;
      })

      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.isLoading = false;
        state.albums = action.payload;
        state.error = '';
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.isLoading = false;
        state.albums = undefined;
        state.error = action.error.message!;
      })
      .addCase(logoutRequestAction, (state, action) => {
        state = Object.assign(state, initialState);
      });
  },
  reducers: {},
});

export default AlbumSlice.reducer;

export {fetchAlbums};
