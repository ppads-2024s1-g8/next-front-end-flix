import { useState } from 'react';
import styles from './Form.module.css';

export function Form() {
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
                    <strong>Cadastrar um novo filme</strong>
                </li>
            </ul>
            <form className={`${styles.registerForm} ${showForm ? styles.active : ''}`}>
                <input onClick={handleInputClick} placeholder="T�tulo" />
                <input onClick={handleInputClick} placeholder="Diretor" />
                <input onClick={handleInputClick} placeholder="Elenco principal" />
                <input onClick={handleInputClick} placeholder="Pa�s" />
                <input onClick={handleInputClick} placeholder="Ano" />
                <footer>
                    <button type="submit">Enviar</button>
                </footer>
            </form>
        </div>
    );
}
