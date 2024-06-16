import React from 'react';

const ExpenseItem = ({title, amount, date}) => {
    let day = date.toLocaleString('en-US', {day: '2-digit'})
    let month = date.toLocaleString('en-US', {month: 'long'})
    let year = date.getFullYear()
    return (
        <div className='expenseItem'>
            <div className="expenseItem--date">
                <div className='expenseItem--date__day'>{day}</div>
                <div className='expenseItem--date__month'>{month}</div>
                <div className='expenseItem--date__year'>{year}</div>
            </div>
            <h2>{title}</h2>
            <div className='expenseItem--amount'>$ {amount}</div>
        </div>
    );
};

export default ExpenseItem;