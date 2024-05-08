import { Header } from "../../../../components/Header/Header";

interface UserProps {
    params: {
        id: string
    }
}

export default async function UserProfile(props:any) {

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div>
        oi
    </div>
  );
}
