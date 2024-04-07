import { ReactNode } from 'react'

export default function UserLayout({ children} : {children: ReactNode }){
    return (
        <div>
            <div>{children}</div>
            <p>Perfil do Usuário</p>
        </div>
    )
}