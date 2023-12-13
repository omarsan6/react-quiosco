import { createContext } from "react"

const QuiscoContext = createContext()

const QuiscoProvider = ({children}) =>{

    const hola = "Hola mundo"

    return (
        <QuiscoContext.Provider value={{
            hola
        }}>
            {children}
        </QuiscoContext.Provider>

    )

}

export {QuiscoProvider}
export default QuiscoContext

