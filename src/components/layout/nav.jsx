import React from "react"
import { Link } from "react-router-dom"

function Nav({actualPage}){

    return(
        <nav className="h-16 flex justify-center p-5">
            <div className="flex items-center">
                <Link to={'/'} className="titulo text-3xl font-bold">COMPACT</Link>
            </div>
        </nav>
    )
}

export default Nav