import {createContext, useState} from "react";

export const CustomContext = createContext()

export const CustomContextWrapper = ({ children }) => {
    const [list , setList] = useState([])

    return(
        <CustomContext.Provider value={{list, setList}}>
            {children}
        </CustomContext.Provider>
    )
}