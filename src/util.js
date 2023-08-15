import {createContext, useState} from "react"

export const CustomContext = createContext()

export const CustomContextWrapper = ({ children }) => {
    const [list , setList] = useState([])
    const [loading, setLoading] = useState(true)

    return(
        <CustomContext.Provider value={{list, setList, loading, setLoading}}>
            {children}
        </CustomContext.Provider>
    )
}