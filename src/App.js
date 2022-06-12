import './App.scss';
import Header from './components/Header';
import { useState, useEffect } from "react";
import { Converter } from './components/Converter';

function App() {
  function formatNumber(number, degree) {
    if(typeof(number) === "number"){
      return number.toFixed(degree);
    } else{
      return Number(number).toFixed(degree)
    }
  }
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
      .then((response) => response.json())
      .then((data) => setState(data.filter(ccy => ccy.ccy !== "BTC")));
  }, []);

  
  return (
    <div className="app">
      <Header data={state}  format={formatNumber}/>
      <Converter data={state} format={formatNumber}/>
    </div>
  );
}

export default App;
