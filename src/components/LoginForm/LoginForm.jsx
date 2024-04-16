import Link from 'next/link';
import styles from './LoginForm.module.css';

export function Register() {
    return (
        <div className={styles.form}>
            <form>
                <h1><strong>Endereço de e-mail</strong></h1>
                    <textarea placeholder="Digite seu e-mail" required></textarea>
                <h1><strong>Sua senha</strong></h1>
                    <textarea required></textarea>
                <footer>
                    <button><strong>
                        <Link href='/user/profile/1'>
                            Entrar na plataforma
                        </Link>
                    </strong></button>
                <div className={styles.footerLinks}>
                    <h4>
                        <Link href="http://localhost:">
                        Esqueceu sua senha?
                        </Link>
                    </h4>
                    <h4>
                        <Link href="/sign-up">
                        Não possui conta? Crie uma agora!
                        </Link>
                    </h4>
                </div>
                </footer>
            </form>
        </div>
    )
}