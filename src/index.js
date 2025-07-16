import React from 'react';
import ReactDOM from 'react-dom/client';

import {StoreProvider} from "app/providers/storeProvider";
import App from "./app/App";

import "./app/styles/index.sass"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StoreProvider>
        <App/>
    </StoreProvider>
);

