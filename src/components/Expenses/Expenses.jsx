import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from '../NewExpense/ExpenseFilter';

const Expenses = (props) => {
    const [filteredData, setFilteredData] = useState('2024')

    const changeYear = (year) => {
        console.log(year);
        setFilteredData(year)
    }

    const filteredExpense = props.expenses.filter(el => {
        return el.date.getFullYear().toString() === filteredData
    })

    return (
        <Card className='expenses'>
            <ExpenseFilter onGetYear={changeYear} selected={filteredData}/>
            {filteredExpense.map(el => (
                <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date}/>
            ))}
        </Card>
    );
};

export default Expenses;