import React from "react"
import Nav from '../components/layout/nav'
import { Outlet } from "react-router-dom"


function InicioPage () {
    return (
        <>
            <Nav actualPage={'Inicio'}/>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default InicioPage