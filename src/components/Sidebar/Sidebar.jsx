import { MainNavigation } from './MainNavigation';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
              <MainNavigation/>
               <div className={styles.profile}>

                    <strong>Antônio Biasotti</strong>
                    <span>Web Developer</span>
               </div>

               <footer>
                    <a href="#">
                         Editar seu perfil
                    </a>
               </footer>
          </aside>
    )
}