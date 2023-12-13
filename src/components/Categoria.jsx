import useQuiosco from "../hooks/useQuiosco"


export default function Categoria({categoria}) {

    const {handleClickCategoria, categoriaActual} = useQuiosco()
    const {icono, id, nombre} = categoria

    const resaltarCategoria = () => categoriaActual.id === id ? "bg-amber-400" : "bg-amber-200"

  return (
    <div 
      className={`${resaltarCategoria()} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 
        cursor-pointer`}>
      <img 
      src={`../../public/img/icono_${icono}.svg`} 
      alt="Imagen icono"
      className="w-12" 
      />

      <button 
        type="button"
        className="font-bold text-lg cursor-pointer truncate"
        onClick={() => handleClickCategoria(id)}>
        {nombre}
        </button>
    </div>
  )
}
