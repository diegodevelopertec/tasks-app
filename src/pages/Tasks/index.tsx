import { useContext, useState } from "react"
import Layout from "../../components/Layout"
import { ButtoNewNote, FormNote, Page } from "./style"
import NoteCard from "../../components/NoteCard"
import Close from "../../contextUI/svgs/close"
import { useContextUI } from "../../contextUI"
import { Notes } from "../../utils/notes"
import { toast } from "react-toastify"

export default ()=>{
    const {globalTheme}=useContextUI()
    const [notesList,setNotesList]=useState(Notes)
    const [editeNote,setEditeNote]=useState(false)
    const [newNote,setNewNote]=useState(false)



    const AddNewNote=()=>{
        setNewNote(false)
        toast.success('nova anotação criada')
    }
    const EditeNote=()=>{
        setEditeNote(false)
        toast.success(' anotação atualizada')
    }


    return <Layout>
        <Page>
       <h2>Tarefas</h2>
        <div className="notes-box">
            {notesList.map((i,k)=>(
                <NoteCard onClickEdite={()=>setEditeNote(true)} note={i} key={k}/>
               
            ))}
             <ButtoNewNote onClick={()=>setNewNote(true)}>
                   <span>+</span>
            </ButtoNewNote>
        </div>
            <FormNote bgThemeForm={globalTheme} activeFormNote={editeNote || newNote}>
                <div className="content">
                 <div className="header">
                      {editeNote && <span onClick={()=>setEditeNote(false)}><Close /> </span>}
                      {newNote && <span onClick={()=>setNewNote(false)}><Close /> </span>}
                  </div>  
                  <div className="cx-in">
                      <label htmlFor="">Titulo</label>
                      <input type="text" />
                  </div>
                  <div className="cx-in">
                      <label htmlFor="">Anotação</label>
                      <textarea>
      
                      </textarea>
                   </div>
                   <div className="cx-btn">
                       {newNote && <button onClick={AddNewNote}>guardar</button>}
                       {editeNote && <button onClick={EditeNote}>salvar</button> }
                   </div>
                 </div>
                 </FormNote>
            
        </Page>
    </Layout>
}