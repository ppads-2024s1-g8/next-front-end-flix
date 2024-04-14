import Image from "next/image";

interface UserProps {
    params: {
        id: string
    }
}

export default function UserProfile(props:any) {
  return (
    <div>
        <p>Bem-vindo usuário {props.params.id}</p>
    </div>
  );
}
