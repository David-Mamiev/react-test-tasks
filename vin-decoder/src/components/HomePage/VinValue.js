export function VinValue({value}){
    return (
        <li className="list-values__li">
            <span className="list-values__variable">{value.Variable}:</span>
            <span className="list-values__value">{value.Value}</span>
        </li>
    )
}