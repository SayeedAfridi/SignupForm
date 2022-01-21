import { ThemeProvider } from '@src/contexts';
import AppProvider from './AppProvider';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <AppProvider />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
