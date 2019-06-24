import { createStore } from 'redux';
import cartReducer from '../Shopping/reducers/cartReducer';

// function saveToLocalStorage(state) {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("state", serializedState);
//   } catch (e) {
//     console.log(e);
//   }
// }
// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem("state");
//     if (serializedState === null) return undefined;
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.log(e);
//     return undefined;
//   }
// }
// const persistedState = loadFromLocalStorage();
const store = createStore(cartReducer);

// store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
