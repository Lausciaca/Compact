import React from "react"
import Nav from '../components/layout/nav'
import { Outlet } from "react-router-dom"


function InicioPage () {
    return (
        <div className="h-full overflow-hidden">
            <Nav actualPage={'Inicio'}/>
            
            <main className="h-full mx-auto flex w-5/6">
                <section className="flex justify-center items-center w-1/3 h-full">
                    <img src="\src\assets\react.svg" alt="Logo React" className="h-4/6 logo react"/>
                </section>
                <section className="w-2/3 flex flex-col p-40">
                    <h1 className="text-5xl text-yellow-400 font-bold mb-2">Biblioteca web de componentes</h1>
                    <h2 className="text-4xl font-bold mb-2">Simplifica tu desarrollo en React</h2>
                    <p className="text-2xl opacity-60">
                    Compact posee una amplia y diversa biblioteca de componentes ReactJS 
                    listos para usar. Ya sea que necesites botones, formularios interactivos, 
                    carruseles de imágenes o elementos de navegación, entre otros. Nuestra 
                    colección crece constantemente, asegurándote acceso a las últimas tendencias 
                    y mejores prácticas de desarrollo web. Para utilizar Compact no se 
                    requiere de ningún tipo de instalación, es tan simple como copiar y 
                    pegar el código
                    </p>
                </section>
            </main>

        </div>
    )
}

export default InicioPage