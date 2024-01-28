import { toast } from "react-toastify"
import Layout from "../../components/Layout"
import { Page } from "./style"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContextApp } from "../../context"


export default ()=>{
    const {Register}=useContextApp()
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
   const navigate=useNavigate()



const handleValueName=(e:ChangeEvent<HTMLInputElement>)=>setName(e.target.value)
const handleValueEmail=(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)
const handleValuePass=(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)


const RegisterUser=()=>{
    if(email.includes('@gmail.com') &&  password.length > 6 && name !== ''){
          const user={
            name,email,password
        }
        console.log(user)
        toast.success('conta criada')
        Register(user)
        setTimeout(()=>{
            navigate('/login')
        },2000)

    }else{
        if(!email.includes('@gmail.com')){
            toast.error('insira um email válio')
        }else if(password.length < 6){
            toast.error('insira uma senha com até 6 caracteres')
        }else if(name == ''){
            toast.error('insira seu nome(nao completo)')
        }
    }
}

    return <Layout>
        <Page>
            <form action="">
                <h3>Cadastrar</h3>
                <p>Preencha os campos para entrar : </p>
                <div className="cx-input">
                    <label htmlFor="">Nome</label>
                    <input type="email" placeholder="digite seu email" value={name} onChange={handleValueName} />
                </div>
                <div className="cx-input">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="digite seu email" value={email} onChange={handleValueEmail}  />
                </div>
                <div className="cx-input">
                    <label htmlFor="">Senha</label>
                    <input type="password" placeholder="digite sua senha" value={password} onChange={handleValuePass}  />
                </div>
                <div className="cx-btn">
                    <button type="button" onClick={RegisterUser}>criar conta</button>
                </div>
            </form>
        </Page>
    </Layout>
}