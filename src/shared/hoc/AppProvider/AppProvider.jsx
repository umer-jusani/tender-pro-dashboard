"use client";
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import UIThemeProvider from '../theme/ThemeProvider'
import store from '@/store/store'

const AppProvider = ({children}) => {
    return (
        <UIThemeProvider>
            <Provider store={store}>
                <Suspense>
                    {children}
                </Suspense>
            </Provider>
        </UIThemeProvider>
    )
}

export default AppProvider