'use client';
import { GlobalUIContext } from './context/GlobalUIContext';
import { InteractionContext } from './context/InteractionContext';

export const UIProvider = ({ children }) => {
    return (
        <GlobalUIContext>
            <InteractionContext>
                {children}
            </InteractionContext>
        </GlobalUIContext>
    );
};