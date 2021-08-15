import React from 'react';
import Balance from '../../components/Balance/balance';
import TransactionHistory from '../../components/TransactionHistory/transaction-history';
import TransactionTotals from '../../components/TransactionTotals/transaction-totals';
import NewTransaction from '../../components/NewTransaction/new-transaction';

const ExpenseTracker = () => {

    return (
        <div className="container">
            <Balance/>
            <TransactionTotals/>
            <TransactionHistory/>
            <NewTransaction/>
        </div>
    )
}

export default ExpenseTracker;