import {SignUpResponseInterface} from '../../redux/reducers/UserReducer';

export interface UserPayloadInterface {
  name?: string;
  email: string;
  password: string;
}

export interface ResponseInterface {
  success: boolean;
  message?: string;
  data: any | null;
}

function findUser(email: string, users: Realm.Results<Realm.Object>) {
  const result = users?.filtered(`email = "${email}"`);
  return result;
}

function createUser(
  realm: Realm,
  users: Realm.Results<Realm.Object>,
  data: UserPayloadInterface,
): ResponseInterface {
  const isExist = findUser(data?.email, users);

  if (isExist?.length === 0) {
    const result = realm.write(() => {
      return realm.create('User', data);
    });

    return {success: true, message: 'User created', data: result};
  } else {
    return {success: false, message: 'User already exists', data: null};
  }
}

function loginUser(
  users: Realm.Results<Realm.Object>,
  data: UserPayloadInterface,
): ResponseInterface {
  const isExist = findUser(data?.email, users);

  if (isExist?.length > 0) {
    if (data?.password === isExist[0]?.password!) {
      return {success: true, message: 'User logged in', data: isExist[0]};
    } else {
      return {
        success: false,
        message: 'Email / Password incorrect',
        data: null,
      };
    }
  } else {
    return {success: false, message: 'User not exists', data: null};
  }
}

function updateUserName(
  realm: Realm,
  users: Realm.Results<Realm.Object>,
  data: {name: string; email: string},
) {
  const isExist = findUser(data?.email, users);

  if (isExist?.length > 0) {
    const result = realm.write(() => {
      return realm?.create(
        'User',
        {...isExist[0], name: data?.name, email: data?.email},
        'modified',
      );
    });

    return {success: true, message: 'User name updated', data: result};
  } else {
    return {success: false, message: 'User not exists', data: null};
  }
}

function updateUserPassword(
  realm: Realm,
  users: Realm.Results<Realm.Object>,
  data: {oldPassword?: string; password?: string; email: string},
) {
  const isExist = findUser(data?.email, users);

  if (isExist?.length > 0) {
    if (
      data?.oldPassword ? isExist[0]?.password! === data?.oldPassword : true
    ) {
      const result = realm.write(() => {
        return realm?.create(
          'User',
          {...isExist[0], password: data?.password, email: data?.email},
          'modified',
        );
      });

      return {success: true, message: 'User password updated', data: result};
    } else {
      return {success: false, message: 'old password incorrect', data: null};
    }
  } else {
    return {success: false, message: 'User not exists', data: null};
  }
}

export {createUser, loginUser, updateUserName, updateUserPassword};
