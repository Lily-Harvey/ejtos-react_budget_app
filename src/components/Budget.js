import { AppContext } from '../context/AppContext';
import { useContext, useState } from 'react';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        let value = Number(event.target.value);

        // Enforce the maximum value of 20000
        if (value > 20000) {
            value = 20000;
            alert("The value cannot exceed the max value of 20,000");
        }

        // Enforce the minimum value of 0
        if (value < 0) {
            value = 0;
        }

        setNewBudget(value);
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} max={20000}></input>
        </div>
    );
};

export default Budget;