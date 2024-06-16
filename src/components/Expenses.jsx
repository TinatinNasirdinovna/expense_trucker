import React from 'react';
import ExpenseItem from './ExpenseItem';

const Expenses = ({expenses}) => {
    console.log(expenses);
    return (
        <div className='expenses'>
            {expenses.map((el, id) => {
                return <ExpenseItem title={el.title} amount={el.amount} date={el.date}/>
            })}
        </div>
    );
};

export default Expenses;