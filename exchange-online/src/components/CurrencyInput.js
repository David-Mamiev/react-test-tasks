export const CurrencyInput = ({ currencies, currency, amount, onAmountChange, onCurrencyChange }) => {
  return (
    <div className="converter__form">
        <input className="converter__input" type="text" value={amount} onChange={(ev) => onAmountChange(ev.target.value)}></input>
        <select className="converter__select" value={currency} onChange={(ev) => onCurrencyChange(ev.target.value)}>
            {currencies.map((ccy, ind) =>  (
                <option className="converter__option" value={ccy} key={ind}>{ccy}</option>
            ))}
        </select>
    </div>
  )
}
