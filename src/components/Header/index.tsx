import { Link } from "react-router-dom"
import { HeaderBox } from "./style"
import Close from "../../contextUI/svgs/close"
import { useContextUI } from "../../contextUI"
import Menuburguer from "../../contextUI/svgs/menuburguer"


export default ()=>{
    const {stateMenuMobile,handleStateMenuMobile}=useContextUI()


    return <HeaderBox onMenu={stateMenuMobile}>
        <div className="left">
           <h3>React Tasks</h3>
        </div>
        <div className="right">
            <div className="cx-on-mobile" onClick={()=>handleStateMenuMobile(true)}>
                <Menuburguer />
            </div>
        <nav>
            <div className="cx-close" onClick={()=>handleStateMenuMobile(false)}>
                <Close />
            </div>
            <div className="links">
                <Link to={'/register'} onClick={()=>handleStateMenuMobile(false)}>Criar conta</Link>
                <Link to={'/login'} onClick={()=>handleStateMenuMobile(false)}>Entrar</Link>
                <Link to={'/tarefas'} onClick={()=>handleStateMenuMobile(false)}>tarefas</Link>
            </div>
        </nav>

        </div>
    </HeaderBox>
}