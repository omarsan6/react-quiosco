import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"

export default function Sidebar() {


    const {categorias} = useQuiosco()

    return (
        <aside className="md:w-72 z-20">
            <div className="p-10 ">
                <img
                    src="../../public/img/logo.svg"
                    alt="imagen logo"
                    className="w-40" />
            </div>

            <div className="mt-2">
                {categorias.map(categoria => (
                    <Categoria 
                        key={categoria.id}
                        categoria={categoria}    
                    />
                ))}
            </div>

            <div className="mt-5 px-3">
                <button
                    type="button"
                    className="text-center bg-red-500 hover:bg-red-700 w-full p-3 font-bold text-white"    
                >
                    Cancelar orden
                </button>
            </div>

        </aside>
    )
}
