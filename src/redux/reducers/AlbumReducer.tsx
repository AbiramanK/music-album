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

const fetchAlbums = createAsyncThunk(FETCH_ALBUMS, async (cursor: number) => {
  console.log('courser: ', cursor);
  const result = await fetch(
    `https://itunes.apple.com/in/rss/topalbums/limit=${cursor}/json`,
  );

  const resultJson = await result?.json();

  console.log('result: ', resultJson);

  return resultJson;
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
        if (state.albums) {
          state.albums.feed.entry = [
            ...state?.albums?.feed?.entry,
            ...action?.payload?.feed?.entry,
          ];
        }
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
