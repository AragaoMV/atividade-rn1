import { SafeAreaView, View } from 'react-native';
import HomePage from './src/screens/HomePage';

export default function App() {
  return <SafeAreaView style={[{ flex: 1, alignItems: 'center', alignContent: 'flex-start', backgroundColor: '#87CEEB' }]}>
    <HomePage />
  </SafeAreaView>

}
