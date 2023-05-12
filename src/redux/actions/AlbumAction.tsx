import {createAction} from '@reduxjs/toolkit';

import {GET_ALBUMS_REQUEST} from '../Constant';

const getAlbumsRequest = createAction(GET_ALBUMS_REQUEST);

export {getAlbumsRequest};
