import './styles.css'

export function Card({ name, time }){
    return (
        <div className='person__infos'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}