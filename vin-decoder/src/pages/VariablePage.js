import { useEffect, useState } from "react"

import { VariablesListMap } from "../components/VariablePage/VariablesListMap";

export function VariablePage() {
    const [arrVariablesNames, setArrVariablesNames] = useState([]);
    const [arrVariablesDescription, setArrVariablesDescription] = useState([]);
    const [arrVariablesId, setArrVariablesId] = useState([]);
    useEffect(() => {
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
            .then((res) => res.json())
            .then((data) => {
                setArrVariablesNames(data.Results.map((item) => item.Name));
                setArrVariablesDescription(data.Results.map((item) => item.Description));
                setArrVariablesId(data.Results.map((item) => item.ID));
            });
    }, [])
    return (
        <section className="variable-page">
            <div className="container">
                <h1 className="variable-page__title"> Variable Page </h1>
                <p className="variable-page__description">
                    Here you can read the description of all the variables that describe the car by the VIN code
                    <br />
                    You can also read about each variable separately by simply querying the variable ID.
                    For example variables/YOUR_ID
                </p>
                <VariablesListMap arrVariablesNames={arrVariablesNames}
                    arrVariablesDescription={arrVariablesDescription}
                    arrVariablesId={arrVariablesId}
                />
            </div>
        </section>
    )
}