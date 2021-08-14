import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import TransactionEntry from '../Transaction/transaction-entry';
import './transaction-history.scss';

const TransactionHistory = () => {
    const {transactions} = useContext(GlobalContext)

    return (
        <div className="transaction-history-wrapper">
            <h2>History</h2>
            <ul className="list">
                {transactions.map((transaction) => {
                    return (
                        <TransactionEntry
                            key={transaction.id}
                            transactionData={transaction}
                        />
                    )
                })}

            </ul>
        </div>
        
    )
}

export default TransactionHistory;