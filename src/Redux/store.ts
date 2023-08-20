import { createStore } from 'redux';
import contactsReducer from './reducers';

const store = createStore(contactsReducer);

export default store;
// const res= store.subscribe((store)=>{
//     console.log(store)
// })
export type RootState = ReturnType<typeof store.getState>;