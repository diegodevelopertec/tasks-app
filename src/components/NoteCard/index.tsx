import { useContext, useState } from "react"
import { Box } from "./style"
import { useContextUI } from "../../contextUI"
import Edit from "../../contextUI/svgs/Edit"
import Lixeira from "../../contextUI/svgs/lixeira"
import { useContextApp } from "../../context"
import { noteType } from "../../types/notes"


type props={
    note:noteType,
    onClickEdite:()=>void,
   
}
export default ({note,onClickEdite}:props)=>{
      const {globalTheme}=useContextUI()
      const {deleteNote}=useContextApp()



    return <Box bgTheme={globalTheme}>
        <div className="top">
            <div className="btns">
               <span onClick={onClickEdite}> <Edit /> </span>
               <span onClick={()=>deleteNote(note.id)}> <Lixeira /></span>
            </div>
          <h3>{note.title}</h3>
          <span> criada em  {note.date}</span>
        </div>
        <p>{note.text}</p>
    </Box>
}