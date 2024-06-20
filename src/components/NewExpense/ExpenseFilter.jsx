import React from 'react';

const ExpenseFilter = (props) => {

    const getGhangedValue = (e) => {
        props.onGetYear(e.target.value)
    }

    // console.log(filtered);
    return (
        <div className='expenseFilter'>
            <div className="expenseFilter--control">
                <label>Filter by year</label>
                <select name="" id="" onChange={getGhangedValue} value={props.selected}>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;