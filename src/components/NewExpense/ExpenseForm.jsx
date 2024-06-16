import React from 'react';

const ExpenseForm = () => {
    return (
        <form>
           <div className="expenseForm">
            <div className="expenseForm--input">
                <label>Title</label>
                <input type="text" />
            </div>
            <div className="expenseForm--input">
                <label>Amout</label>
                <input type="number" />
            </div>
            <div className="expenseForm--input">
                <label>Date</label>
                <input type="date" />
            </div>
           </div>
           <div className="expenseForm--btn">
            <button>Add Expense</button>
           </div>
        </form>
    );
};

export default ExpenseForm;