import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';

const middlewares: any[] = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
