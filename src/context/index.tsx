import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { noteType } from "../types/notes";
import { UserType } from "../types/user";
import { json } from "react-router-dom";





type props={
    children:ReactNode
}
type ContextType = {
  user: UserType | null;
  notes:noteType[] | [];
  addNote:(newNote:noteType)=>void,
  deleteNote:(id:number)=>void,
  updateNote:(note:noteType)=>void,
  clearNotes:()=>void,
  Logged: boolean;
  Login: (email: string, password: string) => void;
  Register: (user: UserType) => void;
};

export const Context = createContext<ContextType>({
  user: null,
  notes:[],
  addNote:(newNote:noteType)=>{},
  deleteNote:(id:number)=>{},
  updateNote:(note:noteType)=>{},
  clearNotes:()=>{},
  Login: (email: string, password: string) => {},
  Register: (user: UserType) => {},
  Logged:false
});

export const ContextProvider = ({ children }:props) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [userStorage,setUserStorage]= useState<UserType | null>(null);
  const [Logged,setLogged]=useState(false)
  const [notes,setNotes]=useState<noteType[] | []>([])



  useEffect(()=>{
   const getUserLogged=()=>{
    const notesString=localStorage.getItem('notes')
    const notesStorage=JSON.parse(notesString as string)
    const userString=localStorage.getItem('notes')
    const userStorageParse=JSON.parse(userString as string)

      if(notesStorage){
        setNotes(notesStorage)

      }
      if(userStorageParse){
        setUser(userStorageParse)
        setUserStorage(userStorageParse)
        setLogged(true)
      }

   }

   getUserLogged()
  },[])


  const Login = (email: string, password: string) => {
        const user={email,password}
        const userStorage=localStorage.getItem('user')
        const userStorageParsed=JSON.parse(userStorage as string)
        if(userStorageParsed !== null && user === userStorageParsed){
            setLogged(true)
           setUser(userStorageParsed)
           toast.success('Logado com successo')
        }else{
          toast.error('Não possui uma conta ou dados inváldos')
        }
        
  };

  const Register = (newUser: UserType) => {
    localStorage.setItem('user',JSON.stringify(newUser))
    setUser(newUser)
    console.log(user)
  };



 const  addNote=(newNote:noteType)=>{
     setNotes([newNote,...notes])
     localStorage.setItem('notes',JSON.stringify(notes))
     toast.success('Anotação criada')
   }
  const deleteNote=(id:number)=>{
    const newList=notes.filter(i=>i.id !== id)
    setNotes(newList)
    localStorage.setItem('notes',JSON.stringify(newList))
    toast.success('Anotação deletada')
  }
 const  clearNotes=()=>{
  setNotes([])
  localStorage.setItem('notes',JSON.stringify([]))
  toast.success('Anotações deletadas')
  }



  const updateNote=(note:noteType)=>{
   const noteFind=notes.find(i=>i.id === note.id) as noteType
  if(note.text !== noteFind.text || note.title !== noteFind.title){
      noteFind.title=note.title
      noteFind.text=note.text
      setNotes([
      ...notes,{
          ...noteFind,
        
        }
      
      ])
  }

   

  }



  return (
    <Context.Provider value={{notes,addNote,updateNote,deleteNote,clearNotes,user, Login, Register,Logged}}>
      {children}
    </Context.Provider>
  );
};

export const useContextApp = () => useContext(Context);
