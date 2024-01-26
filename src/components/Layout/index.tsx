import { ReactNode } from "react"
import { Container, Main } from "./style"
import Header from "../Header"
import ButtonHandleTheme from "../ButtonHandleTheme"
import { useContextUI } from "../../contextUI"


type Props={
    children:ReactNode
}

export default ({children}:Props)=>{
    const {globalTheme}=useContextUI()
    return <Container globalTheme={globalTheme}>
        <Header />
        <Main>
            {children}
            <ButtonHandleTheme />
        </Main>
    
    </Container>
}