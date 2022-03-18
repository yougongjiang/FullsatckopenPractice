const { response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())
let persons=[
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
    
]
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
app.get('/api/persons', (req, res) => {
    res.json(persons)
  })
app.get('/api/persons/:id',(request,response)=>{
    const id=Number(request.params.id)
    const person=persons.find(person=>person.id===id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
      }
})  
app.get('/info', (req, res) => {
    const total=persons.length;
    const date=new Date();
    res.send(
        `<p>Phonebook has info for ${total} people</p>` + date
    )
   
  })
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body=request.body
    if (body.name === undefined) {
        return response.status(400).json({
          error: "name missing"
        });
      }
    
      if (body.number === undefined) {
        return response.status(400).json({
          error: "number missing"
        });
      }
    const person = {
        id:Math.floor(Math.random() * 100000),
        name:body.name,
        number:body.number,

    }
    person
    .save()
    .then(savedNote => savedNote.toJSON())
    .then(savedAndFormattedPerson => {
      response.json(savedAndFormattedPerson);
    })
    .catch(error => {
      return response.status(400).json({
        error: "name must be unique"
      });
    });
  })
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })