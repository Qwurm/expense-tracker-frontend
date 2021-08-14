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
        case 'REMOVE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}



// Context
export const GlobalContext = createContext(initialState)

// Context Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeTransaction = (id) => {
        dispatch({
            type: 'REMOVE_TRANSACTION',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            removeTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}