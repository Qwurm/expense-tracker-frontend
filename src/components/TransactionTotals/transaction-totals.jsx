import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './transaction-totals.scss'

const TransactionTotals = () => {
    const { transactions } = useContext(GlobalContext);

    const amountArr = transactions.map((transaction) => transaction.amount)

    // const revenue = (
    //     amountArr.filter((amt => item < ))
    // )

    return (
        <div className="transaction-totals-wrapper">
            <div className="revenue-expense-container">
                <div>
                    <h4>Revenue: </h4>
                </div>
                <div>
                    <h4>Expense: </h4>
                </div>
            </div>
        </div>
        
    )
}

export default TransactionTotals;