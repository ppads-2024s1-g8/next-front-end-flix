import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.cover}></div>
            <div className={"bi bi-person-circle"}>
                <strong>Username</strong>
                <span></span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}