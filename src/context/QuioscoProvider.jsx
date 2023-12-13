import { createContext, useState } from "react"
import { categorias as categoriasDB } from "../data/categorias"

const QuiscoContext = createContext()

const QuiscoProvider = ({children}) =>{

    const [categorias, setCategorias] = useState(categoriasDB)
    const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }
   
    return (
        <QuiscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria
        }}>
            {children}
        </QuiscoContext.Provider>

    )

}

export {QuiscoProvider}
export default QuiscoContext

