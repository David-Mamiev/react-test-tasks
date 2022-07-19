import { useParams } from "react-router-dom";

import { VariableIdComponent } from "../components/VariableIdPage/VariableIdComponent";

export function VariableIdPage() {
    const { variableId } = useParams();
    return (
        <div className="container">
            <VariableIdComponent variableId={variableId} />
        </div>
    )
}