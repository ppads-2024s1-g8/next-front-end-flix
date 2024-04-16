import  FadeLoader from "react-spinners/FadeLoader";
import styles from './Loading.module.css';

export function Loading() {
    return (
        <div className={styles.loadingIcon}>
            <p>Carregando Página...</p>
            <FadeLoader color="#40D8F7"/>
        </div>
    )
}
