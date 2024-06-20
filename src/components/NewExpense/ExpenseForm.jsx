import React, { useState } from 'react';


const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    
    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }    

    const amountChangHandler = (e) => {
        setAmount(e.target.value)
    }

    const dateChangHandler = (e) => {
        setDate(e.target.value)
  

    const submitHandler = (e) => {
        e.preventDefault()

        const data = {
            title, 
            amount,
            date: new Date(date)
        }
        props.onGet(data)
        setTitle('')
        setAmount('')
        setDate('')
    }
    return (
        <form onSubmit={submitHandler}>
           <div className="expenseForm">
            <div className="expenseForm--input">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={title}/>
            </div>
            <div className="expenseForm--input">
                <label>Amout</label>
                <input type="number" onChange={amountChangHandler} value={amount} />
            </div>
            <div className="expenseForm--input">
                <label>Date</label>
                <input type="date" onChange={dateChangHandler} value={date}/>
            </div>
           </div>
           <div className="expenseForm--btn">
            <button type='submit'>Add Expense</button>
           </div>
        </form>
    );
};

export default ExpenseForm;
