import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootRouter from './src/RootRouter';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <RootRouter />
    </SafeAreaProvider>
  );
}

export default App;
