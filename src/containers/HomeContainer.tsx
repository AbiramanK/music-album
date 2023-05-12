import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {fetchAlbums} from '../redux/reducers/AlbumReducer';

import {HomeScreen} from '../screens';

export interface IHomeContainerProps {}

function HomeContainer(props: IHomeContainerProps) {
  const dispatch = useAppDispatch();
  const {albums, error, isLoading} = useAppSelector(state => state.albums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  return <HomeScreen albums={albums?.feed?.entry} />;
}

export default HomeContainer;
