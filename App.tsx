import { ThemeProvider } from '@src/contexts';
import AppProvider from './AppProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigationContainer } from '@src/navigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigationContainer>
          <ThemeProvider>
            <SafeAreaProvider>
              <AppProvider />
            </SafeAreaProvider>
          </ThemeProvider>
        </RootNavigationContainer>
      </PersistGate>
    </Provider>
  );
}
