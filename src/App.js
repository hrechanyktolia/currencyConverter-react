import axios from "axios";
import {useEffect, useRef, useState} from "react";
import Header from "./components/Header";
import Converter from "./components/Converter";


function App() {
    const currentRef = useRef([])
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('UAH')
    const [fromAmount, setFromAmount] = useState(1)
    const [toAmount, setToAmount] = useState(0)


    useEffect(() => {
        axios.get('http://api.exchangerate.host/latest?base=UAH')
            .then(response => {
                currentRef.current = response.data.rates
                onChangeFromAmount(1)
            })
    }, [])

    useEffect(() => {
        onChangeFromAmount(toAmount)
    }, [fromCurrency])

    useEffect(() => {
        onChangeToAmount(fromAmount)
    }, [toCurrency])


    const onChangeFromAmount = (value) => {
        setToAmount((value / currentRef.current[fromCurrency]) * currentRef.current[toCurrency])
        setFromAmount(value)
    }

    const onChangeToAmount = (value) => {
        setFromAmount( (currentRef.current[fromCurrency] / currentRef.current[toCurrency]) * value)
        setToAmount(value)
    }

    const USD = currentRef.current.USD
    const EUR = currentRef.current.EUR

  return (
    <div className="App">
        <div className="container">
            <Header currentUSD={USD} currentEUR={EUR}/>
                    <Converter amount={fromAmount}
                               onChangeAmount={onChangeFromAmount}
                               selectedCurrency={fromCurrency}
                               onChangeCurrency={setFromCurrency}/>

                    <Converter amount={toAmount}
                               onChangeAmount={onChangeToAmount}
                               selectedCurrency={toCurrency}
                               onChangeCurrency={setToCurrency}/>
        </div>
    </div>
  );
}

export default App;
