import { createContext,useState } from "react";

export const AdminFlagContext = createContext({});

//사용법
export const Flag =(props) => {
    const {children}=props
    


    //플래그 만들기

    const [user, setUser] = useState(false)


    //AdminFlagContext 안에 provider 이 있으으로 감싸면 된다
    return (
        <AdminFlagContext.Provider value={{user, setUser}}>
            {children}
        </AdminFlagContext.Provider>
    )
}