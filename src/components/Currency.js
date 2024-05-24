import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency
        });
    };

    return (
        <div id='currencyMenu'>
            <label htmlFor="currency"> Currency: </label>
                <select id="currency" value={currency} onChange={handleCurrencyChange}>
                    <option value="£">£ Pound</option>
                    <option value="$">$ Dollar</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>
        </div>
    );
};

export default CurrencySelector;
