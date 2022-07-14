import { useState } from "react";
import { CurrencyInput } from "./CurrencyInput";

export const Converter = ({ data, format }) => {
  if (data.every((ccy) => ccy.ccy !== "UAH")) {
    data.push({ ccy: "UAH", buy: 1, sale: 1 });
  }
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");

  function amount1ChangeHandler(amount1) {
    setAmount2(
      format(
        ((amount1 * data.filter((ccy) => ccy.ccy === currency1)[0].buy) /
          data.filter((ccy) => ccy.ccy === currency2)[0].buy), 2
      )
    );
    setAmount1(amount1);
  }
  function currency1ChangeHandler(currency1) {
    setAmount1(
      format(
       ( (amount2 * data.filter((ccy) => ccy.ccy === currency2)[0].buy) /
          data.filter((ccy) => ccy.ccy === currency1)[0].buy), 2
      )
    );
    setCurrency1(currency1);
  }

  function amount2ChangeHandler(amount2) {
    setAmount1(
      format(
       ( (amount2 * data.filter((ccy) => ccy.ccy === currency2)[0].buy) /
          data.filter((ccy) => ccy.ccy === currency1)[0].buy), 2
      )
    );
    setAmount2(amount2);
  }
  function currency2ChangeHandler(currency2) {
    setAmount2(
      format(
       ( (amount1 * data.filter((ccy) => ccy.ccy === currency1)[0].buy) /
          data.filter((ccy) => ccy.ccy === currency2)[0].buy), 2
      )
    );
    setCurrency2(currency2);
  }

  return (
    <div className="converter">
      <div className="container">
        <h1 className="converter__title">Currency Converter</h1>
        <div className="converter__inputs">
          <CurrencyInput
            onAmountChange={amount1ChangeHandler}
            onCurrencyChange={currency1ChangeHandler}
            currencies={data.map((ccy) => ccy.ccy)}
            amount={amount1}
            currency={currency1}
          />
          <CurrencyInput
            onAmountChange={amount2ChangeHandler}
            onCurrencyChange={currency2ChangeHandler}
            currencies={data.map((ccy) => ccy.ccy)}
            amount={amount2}
            currency={currency2}
          />
        </div>
      </div>
    </div>
  );
};
