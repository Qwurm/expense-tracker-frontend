import React, {useState, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

const NewTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)
    const [entryName, setEntryName] = useState('')
    const [entryAmt, setEntryAmt] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault();

        const newEntry = { 
            id: Math.floor(Math.random() * 100000000),
            text: entryName,
            amount: +entryAmt,
        }
        addTransaction(newEntry)
    }

    return (
        <div>
            <h3>Add a new entry</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Name</label>
                    <input type="text" value={entryName} onChange={(e) => setEntryName(e.target.value)} placeHolder="Enter amount..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={entryAmt} onChange={(e) => setEntryAmt(e.target.value)} placeHolder="Enter name..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default NewTransaction;