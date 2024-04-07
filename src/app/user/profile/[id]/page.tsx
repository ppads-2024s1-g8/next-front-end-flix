import Image from "next/image";

interface UserProps {
    params: {
        id: string
    }
}

export default function UserProfile(props:any) {
  return (
    <div>
        <h2>User Profile</h2>
        <p>Bem-vindo usuário {props.params.id}</p>
    </div>
  );
}
