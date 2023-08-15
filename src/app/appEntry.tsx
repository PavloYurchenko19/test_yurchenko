import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux";
import {persistor, setupStore} from "./appStore.ts";
import { PersistGate } from 'redux-persist/integration/react';

export const index: () => void = () => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <Provider store={setupStore}>
            <PersistGate persistor={persistor} loading="null">
                <App/>
            </PersistGate>
        </Provider>,
    )
}