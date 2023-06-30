import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {fetchAlbums} from '../redux/reducers/AlbumReducer';

import {HomeScreen} from '../screens';

const LIST_LIMIT = 10;

export interface IHomeContainerProps {}

function HomeContainer(props: IHomeContainerProps) {
  const dispatch = useAppDispatch();
  const {albums, error, isLoading} = useAppSelector(state => state.albums);

  const [cursor, setCursor] = useState<number>(LIST_LIMIT);

  useEffect(() => {
    dispatch(fetchAlbums(cursor ?? LIST_LIMIT));
  }, []);

  useEffect(() => {
    console.log('Albums length: ', albums?.feed?.entry?.length);
  }, [albums]);

  function fetchMoreData() {
    const offet: number = cursor + LIST_LIMIT;
    setCursor(offet);

    dispatch(fetchAlbums(offet));
  }

  return <HomeScreen albums={albums?.feed?.entry} fetchMore={fetchMoreData} />;
}

export default HomeContainer;
