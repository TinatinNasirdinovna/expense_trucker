import React from 'react';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    return (
        <div className='expenseItem'>
            <ExpenseDate date={props.date}/>
            <h2>{props.title}</h2>
            <div className='expenseItem--amount'>${props.amount}</div>
        </div>
    );
};

export default ExpenseItem;