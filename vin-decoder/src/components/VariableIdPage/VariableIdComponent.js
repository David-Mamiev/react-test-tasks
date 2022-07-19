import { useEffect, useState } from "react";
import parse from "html-react-parser";

import "./variableIdStyle.scss";

export function VariableIdComponent({ variableId }) {
    const [variableObj, setVariableObj] = useState({});
    const [isCorrectedId, setIsCorrectedId] = useState(false);
    useEffect(() => {
        fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`)
            .then((res) => res.json())
            .then((data) => {
                if (data.Results.some((item) => item.ID === Number(variableId))) {
                    setVariableObj(data.Results.find((item) => item.ID === Number(variableId)));
                    setIsCorrectedId(true);
                } else {
                    setIsCorrectedId(false);
                }

            });
    }, [variableId]);
    return (
        <>
            {
                isCorrectedId ?
                    (<div>
                        <h1 className="variable-id__title">
                            {variableObj.Name}
                        </h1>
                        <div className="variable-id__text-block">
                            <h3 className="variable-id__id">ID: {variableObj.ID}</h3>
                            <h3 className="variable-id__group-name">
                                Group name: {variableObj.GroupName}
                            </h3>
                            <p className="variable-id__description">Description:</p>
                            {parse(`${variableObj.Description}`)}
                        </div>
                    </div>) 
                    :
                    <div className="incorrect-block">
                        <h1 className="incorrect-block__title">
                            Unfortunately, you have entered an invalid ID, please try another ID.
                        </h1>
                    </div>
            }
        </>
    )
}