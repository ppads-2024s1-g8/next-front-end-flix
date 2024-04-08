import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <hr></hr>
            <ul>
                <li> Antônio </li>
                <li> Thiago </li> 
                <li> Pedro </li>
                <li> Henrique </li>
            </ul>
        </footer>
    );
}