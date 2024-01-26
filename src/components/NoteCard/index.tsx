import { useState } from "react"
import { Box } from "./style"
import { useContextUI } from "../../contextUI"
import Edit from "../../contextUI/svgs/Edit"
import Lixeira from "../../contextUI/svgs/lixeira"

type noteType={
    id:number,
    title:string,
    text:string,
    date:string
}

type props={
    note:noteType,
    onClickEdite:()=>void
}
export default ({note,onClickEdite}:props)=>{


    const {globalTheme}=useContextUI()
    return <Box bgTheme={globalTheme}>
        <div className="top">
            <div className="btns">
               <span onClick={onClickEdite}> <Edit /> </span>
               <span> <Lixeira /></span>
            </div>
          <h3>criada em {note.title}</h3>
          <span>{note.date}</span>
        </div>
        <p>{note.text}</p>
    </Box>
}