import { ReactNode } from 'react'
import { Register } from '../../components/Register/Register.jsx';

export default function AuthLayout({ children } : {children: ReactNode }){
    return (
        <div>
            <h1>Logo do App</h1>
            <div>{children}</div>
            <Register/>
        </div>
    )
}