import { useState } from "react";
import "./Templeite.css"


export default function Templeite() {

    return(
        <div className="AreaTempleite">
            <div className="AreaCliente">
                <div className="FotoCliente"></div>
            </div>
            <div className=" AreaNomeETags">
                <div className="NomeDeCliente">
                    <h2>Fernado luis</h2>
                </div>
                <div className="AreaTagsT">
                    <div className="Tags0T">
                        <h6>Cliente</h6>
                    </div>

                    <div className="Tags1T">
                        <h6>Entrada</h6>
                    </div>

                    <div className="Tags2T">
                        <h6>Saida</h6>
                    </div>
                </div>
            </div>
            <div className="AreaBotoes">
                
            </div>
        </div>
    )
}