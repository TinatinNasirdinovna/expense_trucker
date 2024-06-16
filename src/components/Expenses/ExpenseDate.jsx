import React from 'react';

const ExpenseDate = (props) => {
    let day = props.date.toLocaleString('en-US', {day: '2-digit'})
    let month = props.date.toLocaleString('en-US', {month: 'long'})
    let year = props.date.getFullYear()
    return (
        <div className='expenseItem--date'>
            <div className="expenseItem--date__day">{day}</div>
            <div className="expenseItem--date__month">{month}</div>
            <div className="expenseItem--date__year">{year}</div>
        </div>
    );
};

export default ExpenseDate;