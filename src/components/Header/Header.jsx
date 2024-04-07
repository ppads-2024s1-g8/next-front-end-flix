import styles from './Header.module.css'
import Image from "next/image";

export function Header() {
    return (
        <header className={styles.header}>
            <Image src="/react.svg" width={35} height={15} alt="Logotipo do Flix"/>
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