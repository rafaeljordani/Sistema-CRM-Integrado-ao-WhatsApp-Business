import SideBar from "../components/SidesBars/Fixa/SideBar";
import BarraDePesquisa from "../components/SidesBars/ProntBord/Up/BarraDePesquisa";
import Eef from "../components/SidesBars/ProntBord/Up/Eef";
import CaixaMsg from "../components/SidesBars/ProntBord/Down/CaixaMsg";
import Templeite from "../components/AreaComversa/Templeite/Templeite";
import AreaMensagem from "../components/AreaComversa/AreaMensagem/AreaMensagem";

import "./Home.css"

export default function Home() {
  return (
    <div className="Body">
      <SideBar />
          <div className="ProntBord">
            <div className="Up">
              <div className="BarraDePesquisacss">
                <BarraDePesquisa />
              </div>
              <div className="EEF">
                <Eef />
              </div>
            </div>
            <div className="Down">
              <div className="CaixasMsg">
                < CaixaMsg/>
                < CaixaMsg/>
                < CaixaMsg/>
                < CaixaMsg/>
                < CaixaMsg/> 
              </div>
            </div>
          </div>
          <div className="Comversa">
            <div className="UpComversa">
              <Templeite />
            </div>
            <div className="DownComversa">
              <AreaMensagem />
            </div>
          </div>
    </div>
  );
}