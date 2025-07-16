import React from 'react';
import ReactDOM from 'react-dom/client';


import App from "./app/App";

import "./app/styles/index.sass"
import {StoreProvider} from "app/providers/storeProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <StoreProvider>

                <App/>

    </StoreProvider>

);

