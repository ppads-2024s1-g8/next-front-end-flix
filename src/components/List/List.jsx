'use client'

import { useState } from 'react';
import styles from './List.module.css'
import { Search } from 'lucide-react'


export function List() {

    // const [showForm, setShowForm] = useState(false);

    // function handleSelectOption() {
    //     setShowForm(!showForm);
    // }

    function handleInputClick(event) {
        event.stopPropagation();
    }
    
    return (
        <div>
             <h1 className="text-2xl font-bold">Buscar Título</h1>
                    <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                        <Search className="size-4 text-emerald-300"/>
                        <input 
                            // onChange={onSearchInputChanged} 
                            // value={search}
                            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0" 
                            placeholder="Buscar título..."
                        />
                    </div>
        </div>
    )
}