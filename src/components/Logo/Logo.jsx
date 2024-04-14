import styles from './Logo.module.css';

export function Logo() {
    return (
        <div className={styles.container}>
            <span className={styles.reactLogo}>
                <span className={styles.nucleo}></span>
            </span>
        </div>
    )
}
