'use client'

import { ReactNode } from 'react'
import { Header } from '../../components/Header/Header'
import { Form } from 'src/components/Form/Form'
import { UsersList } from 'src/components/DashBoard/users-list'

export default function AdminLayout({ children} : {children: ReactNode }){
    return (
        <div>
            <div>{children}</div>
            <Form/>
            <UsersList/>
        </div>
    )
}