import React from 'react';
import './transaction-entry.scss'

const TransactionEntry = ({transactionData}) => {
    const sign = (transactionData.amount < 0) ? ('-') : ('+');

    return (
        <div className="transaction-entry-wrapper">
            <li className={(transactionData.amount < 0) ? 'negative' : 'positive'}>
                {transactionData.text}
                <span>{sign}${Math.abs(transactionData.amount)}</span>
                <button className="delete-entry-button">X</button>
            </li>
        </div>
        
    )
}

export default TransactionEntry;