import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootModule from '../redux/rootModule';

const logger = createLogger();

const middlewares = applyMiddleware( thunk, logger);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootModule, enhancer);

export default store;