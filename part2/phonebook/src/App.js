import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone,setNewPhone]=useState('')

  const addPerson = (event) => {
    event.preventDefault()
    //(personsArray.includes(`${personObject.name}`))
    if(persons.find(person=>person.name==newName)!=undefined){
        setNewName('')
        return alert(`${newName} is already added to phonebook`)
    }
      
    const personObject={
      name:newName,
      phone:newPhone
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhone('')
    //console.log(persons)
  }
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange=(event)=>{
    setNewPhone(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          <div>
          number: <input value={newPhone} onChange={handlePhoneChange}/>
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person)=>
        <li key={person.name}>{person.name} {person.phone}</li>
          
        )}
      </ul>
    </div>
  )
}

export default App