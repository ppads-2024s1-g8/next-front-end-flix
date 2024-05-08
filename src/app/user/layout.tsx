import { ReactNode } from 'react';
import { UserMain } from '../../components/UserMain/UserMain';
import { Sidebar } from "src/components/Sidebar/Sidebar";

export default function UserLayout({ children} : {children: ReactNode }){
    return (
        <div>
            <div className="grid grid-cols-app">
                <Sidebar/>
                <div className="px-4 pb-12 pt-8 border-2 border-fuchsia-600">
                    {children}
                </div>
            </div>
        </div>
    )
}