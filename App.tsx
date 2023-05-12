import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import {RealmProvider} from './src/database';
import store from './src/redux';
import RootRouter from './src/RootRouter';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <RealmProvider>
        <Provider store={store}>
          <RootRouter />
        </Provider>
      </RealmProvider>
    </SafeAreaProvider>
  );
}

export default App;
