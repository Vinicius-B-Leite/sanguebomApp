import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { darkMode } from './src/theme/darkMode';
import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={darkMode}>
      <Routes />
    </ThemeProvider>
  );
}
