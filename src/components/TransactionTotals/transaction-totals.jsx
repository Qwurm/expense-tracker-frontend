import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './transaction-totals.scss'

const TransactionTotals = () => {
    const { transactions } = useContext(GlobalContext);

    const amountArr = transactions.map((transaction) => transaction.amount)

    const revenue = amountArr.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (
        amountArr.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2);

    return (
        <div className="transaction-totals-wrapper">
            <div className="revenue-expense-container">
                <div>
                    <h4>Revenue:</h4>
                    <p className="money plus">{revenue}</p>
                </div>
                <div>
                    <h4>Expense:</h4>
                    <p className="money minus">{expense}</p>
                </div>
            </div>
        </div>
        
    )
}

export default TransactionTotals;