import { useState } from "react";
import "./CaixaMsg.css"

export default function CaixaMsg() {

    return (

        <div className="Caixa">
            <div className="AreaFoto">
            <div className="FotoCliente"> </div>
            </div>
            <div className="Infos">
                 <div className="NomeCliente">
                     <h5>Rafael</h5>
                </div>
                
                <div className="UltMesagem">
                    <h5>Tudo bem, podemos fechar mesmo?</h5>
                </div>

                <div className="AreaTags">
                    <div className="Tags0">
                        <h6>Cliente</h6>
                    </div>

                    <div className="Tags1">
                        <h6>Entrada</h6>
                    </div>

                    <div className="Tags2">
                        <h6>Saida</h6>
                    </div>
                </div>
            </div>
            <div className="Data">
                <h5>19:54</h5>
            </div>
        </div>
    )



}