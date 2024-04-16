import { Register } from '../../../components/Register/Register';

export default async function SignIn() {

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div>
      <div>Sign in</div>
      <Register/>
    </div>
  );
}
