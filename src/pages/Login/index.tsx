import Layout from "../../components/Layout"
import { Page } from "./style"


export default ()=>{
    return <Layout>
        <Page>
            <form action="">
                <h3>Entrar</h3>
                <p>Preencha os campos para entrar : </p>
                <div className="cx-input">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="digite seu email" />
                </div>
                <div className="cx-input">
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder="digite sua senha" />
                </div>
                <div className="cx-btn">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </Page>
    </Layout>
}