import React from 'react';

const Converter = ({amount, selectedCurrency, onChangeAmount, onChangeCurrency}) => {
    const currencies = ['USD', 'EUR', 'UAH']

    return (
        <div>
            <div className="box">
                <input
                    className="course-input"
                    type="number"
                    value={amount}
                    onChange={e => onChangeAmount(e.target.value)}/>
                    <select
                        className="course-select"
                        value={selectedCurrency}
                        onChange={e => onChangeCurrency(e.target.value)}>

                        {currencies.map(current =>
                            <option key={current} value={current}>{current}</option>
                        )}
                    </select>
            </div>
        </div>
    );
};

export default Converter;