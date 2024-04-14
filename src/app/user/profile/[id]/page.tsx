import { Header } from "../../../../components/Header/Header";

interface UserProps {
    params: {
        id: string
    }
}

export default function UserProfile(props:any) {
  return (
    <div>
        <Header/>
        <p>Bem-vindo usuário {props.params.id}</p>
    </div>
  );
}
