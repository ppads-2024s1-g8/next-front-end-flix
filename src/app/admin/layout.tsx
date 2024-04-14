'use client'

import { ReactNode } from 'react'
import { Header } from '../../components/Header/Header'
import { UsersList } from 'src/components/DashBoard/users-list'

export default function AdminLayout({ children} : {children: ReactNode }){
    return (
        <div>
            <Header/>
            <div>{children}</div>
            <UsersList/>
        </div>
    )
}