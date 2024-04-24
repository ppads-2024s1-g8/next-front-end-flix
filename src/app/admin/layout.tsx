'use client'

import { ReactNode } from 'react'
import { Header } from '../../components/Header/Header'
import { Form } from 'src/components/Form/Form'

export default function AdminLayout({ children} : {children: ReactNode }){
    return (
        <div>
            <Header/>
            <div>{children}</div>
            <Form/>
        </div>
    )
}