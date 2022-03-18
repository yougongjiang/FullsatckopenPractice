import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import personService from './services/personService'
import Notification from './components/Notification '
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone,setNewPhone]=useState('')
  const [successfulMessage, setSuccessfulMessage] = useState('')

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
    axios
    .post('http://localhost:3001/persons', personObject)
    .then(response => {
      setSuccessfulMessage(
        `person '${personObject.name}' was successfully add to service`
      )
      setTimeout(() => {
        setSuccessfulMessage(null)
      }, 5000)

      setPersons(persons.concat(personObject))
      setNewName('')
      setNewPhone('')
    })
    
    //console.log(persons)
  }
  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handlePhoneChange=(event)=>{
    setNewPhone(event.target.value)
  }
  const deletePersonOf=(id)=>{
    const filteredPerson = persons.filter(person => person.id === id)
    const personName = filteredPerson[0].name
    if(window.confirm(`Delete ${personName} ?`)){
      personService
      .deleteP(id)
      
      setPersons(persons.filter(person=>person.id!=id))
      
     
      console.log(`${personName} successfully deleted`)
    }
      

    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successfulMessage} />
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
        <Person 
            key={person.id} 
            person={person} 
            deletePerson={()=>deletePersonOf(person.id)}/>
        ) }
      </ul>
    </div>
  )
}

export default App