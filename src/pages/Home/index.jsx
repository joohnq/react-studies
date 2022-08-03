import React, { useState, useEffect } from 'react'
import './home.css'
import { Card } from '../../components/Card'

export function Home(){
    const [personName, setPersonName] = useState()
    const [persons, setPersons] = useState([])
    const [user, setUser] = useState({name: '', avatar: ''})

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

    useEffect(() => {
      fetch('https://api.github.com/users/joohnq')
      .then(response => response.json()) 
      .then(data => {
            setUser({
                name: data.name,
                avatar: data.avatar_url
            })
      })   
    }, [])
    
    

    return (
        <div className='container'>
            <header>
                <h1>Lista de presença</h1>

                <div>
                    <strong>{user.name}</strong>
                    <img src={user.avatar} alt="Foto de perfil do usuário" />
                </div>
            </header>

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