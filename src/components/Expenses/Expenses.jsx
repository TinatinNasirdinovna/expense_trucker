import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {props.expenses.map(el => (
                <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date}/>
            ))}
        </Card>
    );
};

export default Expenses;