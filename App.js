import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppContextProvider } from './src/app/AppContext';
import AppNavigation from './src/app/AppNavigation';

export default function App() {
  return (
    <AppContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <AppNavigation />
      </SafeAreaView>
    </AppContextProvider>
  );
}