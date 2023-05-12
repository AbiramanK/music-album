import Realm from 'realm';

const UserSchema: Realm.ObjectSchema = {
  name: 'User',
  properties: {
    name: {type: 'string'},
    email: {type: 'string'},
    password: {type: 'string'},
  },
  primaryKey: 'email',
};

export default UserSchema;
