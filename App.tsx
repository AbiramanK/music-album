import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RealmProvider} from './src/database';
import RootRouter from './src/RootRouter';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <RealmProvider>
        <RootRouter />
      </RealmProvider>
    </SafeAreaProvider>
  );
}

export default App;
