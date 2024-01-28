import { ChangeEvent, useContext, useEffect, useState } from "react"
import Layout from "../../components/Layout"
import { ButtoNewNote, FormNote, Page } from "./style"
import NoteCard from "../../components/NoteCard"
import Close from "../../contextUI/svgs/close"
import { useContextUI } from "../../contextUI"
import { Notes } from "../../utils/notes"
import { toast } from "react-toastify"
import { useContextApp } from "../../context"
import Lixeira from "../../contextUI/svgs/lixeira"
import { noteType } from "../../types/notes"

export default ()=>{
    const {globalTheme}=useContextUI()
    const [editeNote,setEditeNote]=useState(false)
    const [newNote,setNewNote]=useState(false)
    const {user,notes,addNote,clearNotes,updateNote}=useContextApp()
    const [title,setTitle]=useState<string>('')
    const [text,setText]=useState<string>('')
    const [noteUpdate,setNoteUpdate]=useState<noteType | null>(null)

    const dataTitleNote=(e: ChangeEvent<HTMLInputElement>)=>setTitle(e.target.value)
    const datatTextNote=(e: ChangeEvent<HTMLTextAreaElement>)=>setText(e.target.value)


const OpenFormNewNote=()=>{
    setNewNote(true)
    setTitle('')
    setText('')
    
}

const AddNewNote=()=>{
        //adicionar anotacoes
        const d=new Date()
        if(text !== '' &&  title !== ' '){
           const newNote={
                id:Math.floor(Math.random() * 9999) + 0,
                text, title:title,
                date:d.toLocaleDateString()
            }
            addNote(newNote)
            setTitle('')
            setText('')
            setNewNote(false)
        }else{
            toast.error('preencha os campos')
        }
        
    }


const EditeNote=(note:noteType)=>{
    //editar anotacoes
        setNoteUpdate(note)
        setEditeNote(true)
        
}

const  UpdateNote=()=>{
    //atualizar anotacoes
    if(noteUpdate !== null){
        updateNote(noteUpdate)
        setEditeNote(false)
    }
}

    useEffect(()=>{
        if(noteUpdate !== null){
            setText(noteUpdate.text)
            setTitle(noteUpdate.title)
        }

    },[editeNote])


    return <Layout>
        <Page>
       <h2>Tarefas</h2>
       <div className="cx-top">
         <p>{user !== null ? user.name : 'Você'} tem {notes.length} anotações</p>
        {notes.length > 0 &&   <button onClick={clearNotes}><Lixeira /> Deletar tudo</button>}
       </div>
        <div className="notes-box">
            {notes.map((i,k)=>(
                <NoteCard onClickEdite={()=>EditeNote(i)} note={i} key={k}/>   
            ))}
             <ButtoNewNote onClick={OpenFormNewNote}>
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
                      <input type="text" name="title"  value={title} onChange={dataTitleNote} />
                  </div>
                  <div className="cx-in">
                      <label htmlFor="">Anotação</label>
                      <textarea name="text" value={text} onChange={datatTextNote} >
                        
                      </textarea>
                   </div>
                   <div className="cx-btn">
                       {newNote && <button onClick={AddNewNote}>salvar</button>}
                       {editeNote && <button onClick={UpdateNote} >atualizar</button> }
                   </div>
                 </div>
            </FormNote>
            
        </Page>
    </Layout>
}