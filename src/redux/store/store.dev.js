import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
    const middleware = [];
    const enhancers = [];

    middleware.push(thunk);

    const logger = createLogger({
        level: 'info',
        collapsed: true
    });

    if (process.env.NODE_ENV !== 'test') {
        middleware.push(logger);
    }

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

    enhancers.push(applyMiddleware(...middleware));
    const enhancer = composeEnhancers(...enhancers);

    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept(
            '../reducers',
            () => store.replaceReducer(require('../reducers'))
        );
    }

    return store;
}

export { configureStore };