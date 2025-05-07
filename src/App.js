import { View, Text } from 'react-native';
import styles from './styles/style';
import Map1 from './components/map';

export default function App() {
  return (
    <View style={styles.container}>
      <Map1 />
    </View>
  );
};