import React from 'react';
import './Card.css'
import Button from '@material-ui/core/Button';
export default function Card (){

    return (
        <div className='container'>
        <h1 className='title'>COUNTRY QUIZZ</h1>
        <div className='card'>
            <h3 className='question'>Esta es una pregunta</h3>
            <div className='buttons'>
                <Button className='button' variant="contained">Respuesta 1</Button>
                <Button variant="contained">Respuesta 1</Button>
                <Button variant="contained">Respuesta 1</Button>
                <Button variant="contained">Respuesta 1</Button>
            </div>
        </div>
        </div>
    )
}