import React from "react";

function Card () {
    return(
        <div className="border-black w-full sm:w-full md:w-1/2 lg:w-1/3 h-auto p-8 bg-white">
            <a href="">
                <p className="opacity-50">Categoria</p>
                <p className="truncate text-3xl" >
                    Titulo componente
                </p>
            </a>
        </div>
    )
}

export default Card