import Image from "next/image";
import { Register } from '../../../components/LoginForm/LoginForm';
import styles from '../../../components/LoginForm/LoginForm.module.css';

export default async function SignIn() {

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div>
      <div>Sign in</div>
      <div className={styles.title}>
        <Image src="/react.svg" width={35} height={15} alt="Logotipo do Flix"/>
        <strong><h1>Flix App</h1></strong>
        <p>Faça login e comece a usar!</p>
      </div>
      <Register/>
    </div>
  );
}
