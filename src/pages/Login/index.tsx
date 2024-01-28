import { ChangeEvent, useState } from "react"
import Layout from "../../components/Layout"
import { Page } from "./style"
import { toast } from "react-toastify"
import { useContextApp } from "../../context"


export default ()=>{
    const {Login}=useContextApp()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

const handleValueEmail=(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)
const handleValuePass=(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)


const LoginUser=()=>{
    if(email.includes('@gmail.com') &&  password.length > 6){
        Login(email,password)
    }else{
        if(!email.includes('@gmail.com')){
            toast.error('insira um email válio')
        }else if(password.length < 6){
            toast.error('insira uma senha com até 6 caracteres')
        }
    }
}
    return <Layout>
        <Page>
            <form action="">
                <h3>Entrar</h3>
                <p>Preencha os campos para entrar : </p>
                <div className="cx-input">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="digite seu email" value={email} onChange={handleValueEmail} />
                </div>
                <div className="cx-input">
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder="digite sua senha"  value={password} onChange={handleValuePass}/>
                </div>
                <div className="cx-btn">
                    <button type="button" onClick={LoginUser}>Entrar</button>
                </div>
            </form>
        </Page>
    </Layout>
}