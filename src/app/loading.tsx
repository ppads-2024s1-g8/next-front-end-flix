'use client'

import  FadeLoader from "react-spinners/FadeLoader";

export default function CatalogLoading() { 
    return (
        <>
            <p>Carregando Página...</p>

            <FadeLoader color="#40D8F7"/>
        </>
    ) 
}