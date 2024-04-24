'use client'

import { useState } from 'react';
import styles from './List.module.css'


export function List() {

    // const [showForm, setShowForm] = useState(false);

    // function handleSelectOption() {
    //     setShowForm(!showForm);
    // }

    function handleInputClick(event) {
        event.stopPropagation();
    }
    
    return (
        <div>
            <form className={styles.registerForm}>
                <input onClick={handleInputClick} placeholder="Título" required/>
                <input onClick={handleInputClick} placeholder="Diretor" required/>
                <input onClick={handleInputClick} placeholder="Elenco principal" required/>
                <input onClick={handleInputClick} placeholder="País" required/>
                <input onClick={handleInputClick} placeholder="Ano" required/>
                <footer>
                    <button type="submit">Enviar</button>
                </footer>
            </form>
        </div>
    )
}