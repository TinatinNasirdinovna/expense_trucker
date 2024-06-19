import React, { useState } from 'react';

const ExpenseForm = () => {
    const [inputValue, setInputValue] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const inputChangeHandler = (event) => {
        let currentValue = event.target.name
        setInputValue({
            ...inputValue,
            [currentValue]: event.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(inputValue.title);
        console.log(inputValue.amount);
        console.log(inputValue.date);
    }
    return (
        <form onSubmit={submitHandler}>
           <div className="expenseForm">
            <div className="expenseForm--input">
                <label>Title</label>
                <input type="text" name='title' onChange={inputChangeHandler}/>
            </div>
            <div className="expenseForm--input">
                <label>Amout</label>
                <input type="number" name='amount' onChange={inputChangeHandler}/>
            </div>
            <div className="expenseForm--input">
                <label>Date</label>
                <input type="date" name='date' onChange={inputChangeHandler}/>
            </div>
           </div>
           <div className="expenseForm--btn">
            <button>Add Expense</button>
           </div>
        </form>
    );
};

export default ExpenseForm;