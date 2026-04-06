import { useState } from "react";
import "./BarraDePesquisa.css"

export default function BarraDePesquisa() {

    return (

        <div className="BarraDePesquisa">
            <div className="Lupa">
                
            </div>
         <input 
         className="pesquisa" 
         type="text" 
         placeholder="Buscar por nome ou telefone"  />

         <h2 className="TituloPagina">Conversas</h2>
        </div>

    )



}