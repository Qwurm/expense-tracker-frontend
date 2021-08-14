import React, {useContext} from 'react';
import './transaction-entry.scss';

import { GlobalContext } from '../../context/GlobalState';

const TransactionEntry = ({transactionData}) => {
    const { removeTransaction } = useContext(GlobalContext)
    const sign = (transactionData.amount < 0) ? ('-') : ('+');

    return (
        <div className="transaction-entry-wrapper">
            <li className={(transactionData.amount < 0) ? 'negative' : 'positive'}>
                {transactionData.text}
                <span>{sign}${Math.abs(transactionData.amount)}</span>
                <button 
                    className="delete-entry-button"
                    onClick={() => removeTransaction(transactionData.id)}
                    >
                    X
                </button>
            </li>
        </div>
    )
}

export default TransactionEntry;