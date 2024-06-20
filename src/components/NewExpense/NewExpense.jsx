import React from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

const NewExpense = (props) => {
    const getData = (data) =>{
        const expense = {
            ...data,
            id: Math.random().toString()
        }
        props.onGet(expense) 
    }
    return (
        <Card className='newExpense'>
            <ExpenseForm onGet={getData}/>
        </Card>
    );
};

export default NewExpense;