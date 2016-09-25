import { createStore } from 'redux'
export * from './actions'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

const stateUpdate = (reducer) => (state) => (action) =>
  Object.assign({}, state, { [reducer]: action(state[reducer]) });

// keep simple and fork as will increase with some code
const update = stateUpdate('counter');

function counter(state = { counter: 0 }, action) {
  console.log('counter reducer was called', action);
  const updateState = update(state);

  switch (action.type) {
  case 'INCREMENT':
    return updateState((current) => current + 1);
  case 'DECREMENT':
    return updateState((current) => current - 1);
  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1

export default store;
