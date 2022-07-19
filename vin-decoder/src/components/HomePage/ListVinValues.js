import { VinValue } from "./VinValue";

export function ListVinValues ({values}) {
    return (
        <ul className="list-values">
            {values.map((value, id) => id > 1 ? <VinValue key={id} value={value}/> : null)}
        </ul>
    )
}