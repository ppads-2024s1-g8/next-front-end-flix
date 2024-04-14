import { ReactNode } from 'react';
import { UserMain } from '../../components/UserMain/UserMain';

export default function UserLayout({ children} : {children: ReactNode }){
    return (
        <div>
            <div>{children}</div>
            <div>
                <UserMain />
            </div>
        </div>
    )
}