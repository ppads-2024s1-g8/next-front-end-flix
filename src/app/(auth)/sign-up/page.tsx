import { Register } from '../../../components/LoginForm/LoginForm';
import Image from "next/image";
import styles from '../../../components/LoginForm/LoginForm.module.css';

export default function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <div className={styles.title}>
        <Image src="/react.svg" width={35} height={15} alt="Logotipo do Flix"/>
        <strong><h1>Flix App</h1></strong>
        <p>Preencha os campos e crie sua conta!</p>
      </div>
      <Register/>
    </div>
  );
}
