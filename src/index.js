import { Provider } from 'react-redux';
import store from '../redux';
import { Text, View } from 'react-native';

store.subscribe(() => console.log('Second log', store.getState().counter));

const app = () => (
  <View style={style}>
    <Text>
      Test the simple component
    </Text>
  </View>
);

export default app;
