import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer);
persistStore(store)

export { store };
