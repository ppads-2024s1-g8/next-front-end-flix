import styles from './Header.module.css'

import flixLogo from '../assets/react.svg';
export function Header() {
    return (
        <header className={styles.header}>
            <img src={flixLogo} alt="Logotipo do Flix" />
            <strong>Flix</strong>
            {/*
            <section className={styles.searchContainer}>
                <div className={styles.moviewrapper}>
                    <label htmlFor="movie-name">Nome do Filme:</label>
                    <input type="text"></input>
                </div>
            </section>
            */}
        </header>
    );
}