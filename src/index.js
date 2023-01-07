import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import {Provider} from "react-redux";
import {store} from "./Store";
import './fonts.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
