import { Sidebar } from "src/components/Sidebar/Sidebar";
import { Header } from "../../../../components/Header/Header";
import { List } from "src/components/List/List";
import { TitlesList } from "src/components/DashBoard/titles-list";


interface UserProps {
    params: {
        id: string
    }
}

export default async function UserProfile(props:any) {

  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className=" border-2 border-white">
        <List/>
        <TitlesList/>
    </div>
  );
}
