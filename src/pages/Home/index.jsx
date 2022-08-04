import React from 'react'
import './home.css'
import { Header } from '../../components/Header'

export function Home(){
    return (
        <Header name="Home" links={["Shop", "Home", "More...", "Contact"]}/>
    )
}