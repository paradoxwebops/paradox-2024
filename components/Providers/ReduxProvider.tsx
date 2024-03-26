"use client"

import { ProviderProps } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "@/store/"

const ReduxProvider = ({children}:{children:React.ReactNode}) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export {
    ReduxProvider,
}