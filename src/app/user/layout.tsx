import { ReactNode } from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar.jsx'
import { Form } from '../../components/Form/Form.jsx';

export default function UserLayout({ children} : {children: ReactNode }){
    return (
        <div>
            <div>{children}</div>
            <p>Perfil do Usuário</p>
            <Sidebar/>
            <Form />
        </div>
    )
}