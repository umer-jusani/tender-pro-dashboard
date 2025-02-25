import { UIProvider } from '@/shared/centralizeManagement/UIManager'
import React from 'react'

const SessionProvider = ({ children }) => {
    return (
        <UIProvider>
            {children}
        </UIProvider>
    )
}

export default SessionProvider