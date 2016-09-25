import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { Provider } from 'react-redux';
import store, { bootAction, counterAction, incre } from '../redux';

store.subscribe(() => console.log('Second log', store.getState()));

const counterDispatcher = () => console.log('Counter was fired') ||
  store.dispatch(counterAction());

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(142, 68, 173)'
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white'
    }
})

const Heading = ({title}) => (
    <Text style={styles.heading}>
        {title}
    </Text>
)

const Detail = ({onCounter}) => (
  <View>
    <TouchableHighlight onPress={onCounter}><Text>Counter</Text></TouchableHighlight>
  </View>
)

const App = () => {
  store.dispatch(bootAction());
  return (
    <View style={styles.page}>
        <Detail onCounter={counterDispatcher} />
    </View>
  );
}
AppRegistry.registerComponent('AwesomeProject', () => App);
