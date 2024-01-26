import DarkIcon from "../../contextUI/svgs/dark"
import LightIcon from "../../contextUI/svgs/light"
import { Box,Button } from "./style"
import { useEffect } from "react"
import { useContextUI } from "../../contextUI"
import { toast } from "react-toastify"



export default ()=>{
    const {globalTheme,handleGlobalTheme}=useContextUI()
    
    const handleThemeChange=(theme:'light' | 'dark')=>{
        handleGlobalTheme(theme) 
       
    }



    
    return <Box >
        < Button activeTheme={globalTheme === 'light' ? true : false} name="light" onClick={()=>handleThemeChange('light')}>
            <LightIcon />
        </Button>
        <Button activeTheme={globalTheme === 'dark' ? true : false} onClick={()=>handleThemeChange('dark')} >
           <DarkIcon />
        </Button>
    
    </Box>
}