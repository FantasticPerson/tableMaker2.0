import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import { hashHis } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';
import { configureStore } from './redux/store';
import dbConfig from './db'

const store = configureStore();
dbConfig()


render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App');
        render(
            <AppContainer>
                <Provider store={store} >
                    <NextApp />
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
