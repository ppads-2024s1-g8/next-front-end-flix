import styles from './Register.module.css';

export function Register() {
    return (
        <div className={styles.form}>
            <form>
                <div className={styles.title}>
                    <strong><h1>Flix App</h1></strong>
                    <p>Faça login e comece a usar!</p>
                </div>
                <h1><strong>Endereço de e-mail</strong></h1>
                    <textarea placeholder="Digite seu e-mail" required></textarea>
                <h1><strong>Sua senha</strong></h1>
                    <textarea required></textarea>
                <footer>
                    <button><strong><a href='http://localhost:3000/user/profile/1'>Entrar na plataforma</a></strong></button>
                    <h4>Esqueceu sua senha?</h4>
                    <h4>Não possui conta? Crie uma agora!</h4>
                </footer>
            </form>
        </div>
    )
}