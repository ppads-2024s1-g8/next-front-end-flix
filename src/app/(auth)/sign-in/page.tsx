import Image from "next/image";

export default async function SignIn() {

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div>Sign in</div>
  );
}
