import React from 'react';
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

const NewExpense = () => {
    return (
        <Card className='newExpense'>
            <ExpenseForm/>
        </Card>
    );
};

export default NewExpense;