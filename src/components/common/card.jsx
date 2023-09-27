import React from "react";

function Card ({ categoria, titulo ,link }) {
    return(
        <div className="border-black w-full lg:w-1/2 h-auto p-8 bg-white hover:bg-gray-300">
            <a href={link} target="_blank">
                <p className="opacity-50">{categoria}</p>
                <p className="truncate text-3xl" >
                    {titulo}
                </p>
            </a>
        </div>
    )
}

export default Card