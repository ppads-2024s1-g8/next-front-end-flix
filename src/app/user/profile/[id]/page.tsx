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
    </div>
  );
}
