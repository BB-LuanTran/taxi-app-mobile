import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import SearchResult from '@/components/SearchResult/SearchResult';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <SearchResult />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    overflow: 'visible',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
