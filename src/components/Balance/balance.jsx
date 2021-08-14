import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const [totalBalance, setTotalBalance] = useState(0);
    
    useEffect(() => {
        calcBalance()
    }, [transactions])

    const calcBalance = () => {
        let total = 0;

        transactions.forEach((transaction) => {
            total += transaction.amount;
        })

        setTotalBalance(total);
    }

    return (
        <div>
            <h4>YOUR BALANCE</h4>
            <h1>${totalBalance}</h1>
        </div>
    )
}

export default Balance;