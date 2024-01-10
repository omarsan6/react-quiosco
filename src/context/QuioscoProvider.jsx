import { createContext, useState } from "react"
import { categorias as categoriasDB } from "../data/categorias"

const QuiscoContext = createContext()

const QuiscoProvider = ({children}) =>{

    const [categorias, setCategorias] = useState(categoriasDB)
    const [categoriaActual, setCategoriaActual] = useState(categoriasDB[0])
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }
   
    const handleAgregarPedido = ({categoria_id,imagen,...producto}) => {
        setPedido([...pedido, producto])
    }

    return (
        <QuiscoContext.Provider value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            modal,
            handleClickModal,
            producto,
            handleSetProducto,
            pedido,
            handleAgregarPedido
        }}>
            {children}
        </QuiscoContext.Provider>

    )

}

export {QuiscoProvider}
export default QuiscoContext

