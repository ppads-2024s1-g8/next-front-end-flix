import Link from 'next/link';
import Image from "next/image";
import styles from './Register.module.css';

export function Register() {
    return (
        <div className={styles.form}>
            <form>
                <div className={styles.title}>
                    <Image src="/react.svg" width={35} height={15} alt="Logotipo do Flix"/>
                    <strong><h1>Flix App</h1></strong>
                    <p>Faça login e comece a usar!</p>
                </div>
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
                </footer>
            </form>
        </div>
    )
}