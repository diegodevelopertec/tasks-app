import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

type UserType = {
  name: string;
  email: string;
  password: string;
};

type props={
    children:ReactNode
}
type ContextType = {
  user: UserType | null;
  Logged: boolean;
  Login: (email: string, password: string) => void;
  Register: (user: UserType) => void;
};

export const UserContext = createContext<ContextType>({
  user: null,
  Login: (email: string, password: string) => {},
  Register: (user: UserType) => {},
  Logged:false
});

export const UserContextProvider = ({ children }:props) => {
  const [user, setUser] = useState<UserType | null>(null);
 const [userStorage,setUserStorage]= useState<UserType | null>(null);
const [Logged,setLogged]=useState(false)




  useEffect(()=>{
   const getUserLogged=()=>{
    const dataStorage=localStorage.getItem('user')
    if(dataStorage !== 'undefined'){
     setUserStorage(JSON.parse(dataStorage as string))
     setUser(userStorage)
     setLogged(true)
     console.log(user)
     console.log(userStorage)
    }
   }

   getUserLogged()
  },[])


  const Login = (email: string, password: string) => {
        const user={email,password}
        if(userStorage !== null && user === userStorage){
            setLogged(true)
        }
        
  };

  const Register = (newUser: UserType) => {
    localStorage.setItem('user',JSON.stringify(newUser))
    setUser(newUser)
  };

  return (
    <UserContext.Provider value={{ user, Login, Register,Logged}}>
      {children}
    </UserContext.Provider>
  );
};

export const useContextUser = () => useContext(UserContext);
