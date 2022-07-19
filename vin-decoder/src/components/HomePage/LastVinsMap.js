import { LastVin } from "./LastVin";

import "./homePageStyle.scss";

export function LastVinsMap({ setArrValues, lastVinCodes }) {
    return (
        <div className="last-vins-block">
            <h6 className="last-vins-block__title">Recently Found VIN's:</h6>
            <ul className="last-vins-block__list last-vins-list">
                {
                    lastVinCodes.map((vin, id) =>
                        <LastVin key={id} vinCode={vin}
                            setArrValues={setArrValues} 
                        />)
                }
            </ul>
        </div>
    )
}