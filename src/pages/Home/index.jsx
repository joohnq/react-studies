import React, { useState } from 'react'
import './home.css'
import { Card } from '../../components/Card'

export function Home(){
    const [personName, setPersonName] = useState()
    const [persons, setPersons] = useState([])

    function handleAddPerson(){
        const newPerson = {
            name: personName,
            time: new Date().toLocaleString("pt-br", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
        }

        setPersons(prevState => [...prevState, newPerson])
    }

    return (
        <div className='container'>
            <h1>Lista de presença</h1>

            <input 
            type="text" 
            placeholder="Digite aqui seu nome..."
            onChange={e => setPersonName(e.target.value)}
            />

            <button onClick={handleAddPerson}>Adicionar</button>

            {
                persons.map(personElement => <Card name={personElement.name} time={personElement.time} />)
            }
        </div>
    )
}