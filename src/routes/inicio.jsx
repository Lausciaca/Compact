import React from "react"
import Nav from '../components/layout/nav'
import { Outlet } from "react-router-dom"


function InicioPage () {
    return (
        <div className="h-full overflow-hidden">
            <Nav actualPage={'Inicio'}/>
            
            <main className="h-full pl-40">
                <section className="flex justify-center items-center w-1/3 h-full">
                    <img src="\src\assets\react.svg" alt="Logo React" className="h-4/6 logo react"/>
                </section>
            </main>

        </div>
    )
}

export default InicioPage