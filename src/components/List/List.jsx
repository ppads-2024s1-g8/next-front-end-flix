'use client'

import { useState } from 'react';
import styles from './List.module.css'


export function List() {

    const [showForm, setShowForm] = useState(false);

    function handleSelectOption() {
        setShowForm(!showForm);
    }

    function handleInputClick(event) {
        event.stopPropagation();
    }
    
    return (
        <div>
            <ul className={styles.registerOp}>
                <li onClick={handleSelectOption} className="bi bi-caret-right">
                    <strong>Exibir minha Lista</strong>
                </li>
            </ul>
            <form className={`${styles.registerForm} ${showForm ? styles.active : ''}`}>
                <input onClick={handleInputClick} placeholder="Título" />
                <input onClick={handleInputClick} placeholder="Diretor" />
                <input onClick={handleInputClick} placeholder="Elenco principal" />
                <input onClick={handleInputClick} placeholder="País" />
                <input onClick={handleInputClick} placeholder="Ano" />
                <footer>
                    <button type="submit">Enviar</button>
                </footer>
            </form>
        </div>
    )
}