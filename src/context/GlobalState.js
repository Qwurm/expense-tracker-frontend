import React, { createContext, useReducer } from 'react';

const initialState = {
    transactions: [
        { id: 1, text: "Last Oasis", amount: -20 },
        { id: 2, text: "Birthday Money", amount: +50}
    ]
}

// AppReducer
const AppReducer = (state, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
}

// Context
export const GlobalContext = createContext(initialState)

// Context Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
    <GlobalContext.Provider value={{
        transactions:state.transactions
    }}>
        {children}
    </GlobalContext.Provider>
    )
}