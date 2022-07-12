import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { loginReducer } from '../reducers/loginReducer';
import { productsReducer } from '../reducers/productsReducer';
import thunk from 'redux-thunk'

const reducers = combineReducers({
  login: loginReducer,
  products: productsReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)