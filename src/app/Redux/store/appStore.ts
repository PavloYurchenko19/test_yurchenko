import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from "./appReducer.ts";
import {baseApi} from "../../../shared/api/baseApi.ts";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [baseApi.reducerPath, 'tableProductsReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware)
    }
})

export const persistor = persistStore(setupStore);
export type RootState = ReturnType<typeof setupStore.getState>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
    useAppDispatch,
    useAppSelector,
};