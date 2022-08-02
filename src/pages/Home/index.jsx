import './home.css'

export function Home(){
    return (
        <div className='container'>
            <h1>Lista de presença</h1>
            <input type="text" placeholder="Digite aqui seu nome..."/>
            <button>Adicionar</button>
        </div>
    )
}