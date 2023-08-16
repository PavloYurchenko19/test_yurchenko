import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {persistor, setupStore} from "./Redux/store/appStore.ts";
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter} from "react-router-dom";

export const index: () => void = () => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <Provider store={setupStore}>
            <PersistGate persistor={persistor} loading="null">
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>,
    )
}