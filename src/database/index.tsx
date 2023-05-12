import Realm from 'realm';
import {createRealmContext} from '@realm/react';

import UserSchema from './models/User';

const realmConfig: Realm.Configuration = {
  schema: [UserSchema],
};

console.log('Realm file path: ', Realm?.defaultPath);

const {RealmProvider, useObject, useQuery, useRealm} =
  createRealmContext(realmConfig);

export {RealmProvider, useObject, useQuery, useRealm};
