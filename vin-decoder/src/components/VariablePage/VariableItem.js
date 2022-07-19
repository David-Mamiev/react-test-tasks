import parse from "html-react-parser";

export function VariableItem ({variableName, arrVariablesDescription, id, arrVariablesId}) {
    return (
        <li className="variables-list__li">
            <span className="variables-list__name">{variableName} (id: {arrVariablesId[id]})</span>
            {parse(arrVariablesDescription[id])}
        </li>
    )
}