
export default function Header({ data, format }){
    return(
        <header className="header">
            <div className="container">
                <div className="header-block">
                    <h6 className="header-block__title">Exhange Online by David</h6>
                    <div className="header__currency currency-online">
                        <p className="currency-online__title">Current exchange rate</p>
                        <div className="currency-online__ccys"> 
                            <div className="currency-online__ccy">
                                {data.map((el, id) => <div className="currency-online__name-ccy" key={id}>{el.ccy}</div>)}
                            </div>
                            <div className="currency-online__ccy">
                                {data.map((el, id) => <div className="currency-online__buy-ccy" key={id}>{format(el.buy, 4)}</div>)}
                            </div>
                            <div className="currency-online__ccy">
                                {data.map((el, id) => <div className="currency-online__sale-ccy" key={id}>{format(el.sale, 4)}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

