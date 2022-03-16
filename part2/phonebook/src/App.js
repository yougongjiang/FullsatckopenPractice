import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone,setNewPhone]=useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')
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