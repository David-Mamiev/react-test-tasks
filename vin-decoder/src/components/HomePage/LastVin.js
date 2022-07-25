import { useCallback } from "react";

export function LastVin({ vinCode, setArrValues }) {
    const validateArrValues = [];
    const validateVinValue = (value) => {
        if (value.Value && value.Value !== null) {
            validateArrValues.push(value)
        }
    };
    const decodeVin = (vinCode) => {
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vinCode}?format=json`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(validateArrValues);
                data.Results.map((item) => validateVinValue(item));
                setArrValues(validateArrValues);
            });
    }
    return (
        <li className="last-vins-list__li" onClick={() => decodeVin(vinCode)}>
            <span className="last-vins-list__link">{vinCode}</span>
        </li>
    )
}