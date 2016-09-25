import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { connect, Provider } from 'react-redux';
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
    },
    detailContianer: {
      flex: 1,
      flexDirection: 'row'
    },
    detailButton: {
      width: 50,
      height: 80,
    },
    detail: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      padding: 10,
      backgroundColor: 'rgb(100, 28, 133)'
    }
})

const Heading = ({title}) => (
    <Text style={styles.heading}>
        {title}
    </Text>
)

const DetailComponent = ({counter, onCounter}) => (
  <View style={styles.detailContianer}>
    <TouchableHighlight onPress={onCounter} style={styles.detailsButton}>
      <Text style={styles.detail}>Counter {counter}</Text>
    </TouchableHighlight>
  </View>
)

const Detail = connect((state) => {
  console.log('get some state to pass to detail component', state);
  const { counter } = state;

  return { counter };
})(DetailComponent);

const App = () => {
  store.dispatch(bootAction());
  return (
    <Provider store={store}>
      <View style={styles.page}>
        <Heading title={'Counter with Redux'}></Heading>
        <Detail onCounter={counterDispatcher} />
      </View>
    </Provider>
  );
}

AppRegistry.registerComponent('AwesomeProject', () => App);
