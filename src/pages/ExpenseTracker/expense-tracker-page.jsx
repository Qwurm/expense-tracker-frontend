import React from 'react';
import Balance from '../../components/Balance/balance';
import TransactionHistory from '../../components/TransactionHistory/transaction-history';
import TransactionTotals from '../../components/TransactionTotals/transaction-totals';

const ExpenseTracker = () => {

    return (
        <div>
            <Balance/>
            <TransactionHistory/>
            <TransactionTotals/>
        </div>
    )
}

export default ExpenseTracker;