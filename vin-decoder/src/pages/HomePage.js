import { useFormik } from "formik";
import { useState } from "react";

import { LastVinsMap } from "../components/HomePage/LastVinsMap";
import { ListVinValues } from "../components/HomePage/ListVinValues";

const arrLastVinCodesLocalStorage = [
    "5YJSA1E41GF167245", "3GCEC13077G518983", "1GTEK14VX2Z233782",
    "W1K1770871V113132", "ZDM13BSW3FB020883", "1FTFW1CT5DFC10312",
];
localStorage.setItem("arr", JSON.stringify(arrLastVinCodesLocalStorage));
const arrLastVinCodes = localStorage.getItem("arr");

export function HomePage() {
    const checkSpecCharacters = (value) => (value.toString().match(/\W/) ? true : false);
    const [lastVinCodes, setLastVinCodes] = useState(JSON.parse(arrLastVinCodes));
    const [arrValues, setArrValues] = useState([]);
    const validateArrValues = [];
    const validateVinValue = (value) => {
        if (value.Value && value.Value !== null) {
            validateArrValues.push(value)
        }
    };
    const { values, handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            vinCode: ""
        },
        validate(values) {
            const errors = {};
            if (values.vinCode.length !== 17) errors.vinCode = "Vin Code must have 17 characters";
            if (checkSpecCharacters(values.vinCode)) errors.vinCode = "VIN must not contain special characters!";
            return errors;
        },
        onSubmit(values) {
            fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${values.vinCode}?format=json`)
                .then((res) => res.json())
                .then((data) => {
                    data.Results.map((item) => validateVinValue(item));
                    if (arrValues.length) {
                        setArrValues([]);
                    }
                    setArrValues(validateArrValues);
                    if((lastVinCodes.some((vin) => vin === values.vinCode)) === false){
                        setLastVinCodes([...lastVinCodes, values.vinCode]);
                    }
                });
        },
    });
    return (
        <>
            <section className="vin-decoder">
                <div className="form-errorrs">
                    <form onSubmit={handleSubmit} className="vin-decoder__form">
                        <input name="vinCode" type="text" value={values.vinCode} onChange={handleChange} className="vin-decoder__input" placeholder="Enter VIN:" />
                        <button type="submit" className="vin-decoder__button">Check VIN</button>
                    </form>
                    <div className="vin-decoder__error">{errors.vinCode}</div>
                </div>
                <div className="vin-decoder__text-block">
                    <h1 className="vin-decoder__title">Check your VIN Code online!</h1>
                    <p className="vin-decoder__paragraph">Get a free VIN check with our service</p>
                </div>
            </section>
            <div className="list-values-block">
                {arrValues.length ? <ListVinValues values={arrValues} /> : <></>}
                <LastVinsMap setArrValues={setArrValues} lastVinCodes={lastVinCodes}/>
            </div>
        </>
    )
}