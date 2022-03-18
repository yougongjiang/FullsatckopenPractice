import react from 'react'
const Person=({person,deletePerson})=>{
    const label='delete'
    return(
        <li>
            {person.name} {person.phone}
            <button onClick={deletePerson}>{label}</button>
        </li>
         
    )
}
export default Person