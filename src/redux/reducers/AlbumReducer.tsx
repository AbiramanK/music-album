import {createAsyncThunk, createReducer, createSlice} from '@reduxjs/toolkit';
import {getAlbumsRequest} from '../actions/AlbumAction';
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
    builder.addCase(fetchAlbums.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.isLoading = false;
      state.albums = action.payload;
      state.error = '';
    });

    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.isLoading = false;
      state.albums = undefined;
      state.error = action.error.message!;
    });
  },
  reducers: {},
});

export default AlbumSlice.reducer;

export {fetchAlbums};
