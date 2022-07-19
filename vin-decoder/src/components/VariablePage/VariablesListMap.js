import { VariableItem } from "./VariableItem";
import "./variablesStyle.scss";

export function VariablesListMap({ arrVariablesNames, arrVariablesDescription, arrVariablesId }) {
    return (
        <ul className="variables-list">
            { arrVariablesNames.map((name, id) =>
                    <VariableItem key={id} 
                    id={id}
                    variableName={name}
                    arrVariablesDescription={arrVariablesDescription}
                    arrVariablesId={arrVariablesId}
                    />) }
        </ul>
    )
}