import useQuisco from '../hooks/useQuiosco'
import ResumenProducto from './ResumenProducto';
import { formatearDinero } from '../helpers';

export default function Resumen() {

  const { pedido } = useQuisco();

  return (
    <aside className="md:w-72 h-screen overflow-y-scroll p-5 ">
      <h1 className="text-4xl font-black">
        Mi pedido
      </h1>

      <p className="text-lg my-5">
        Aqui podras ver el resumen y totales de tu pedido
      </p>

      <div className="py-10">
        {pedido.length === 0 ? (
          <p className='text-center text-2xl'>
            No hay productos en tu pedido aún
          </p>
        ) : (
          pedido.map(producto => (
            <ResumenProducto 
              key={producto.id}
              producto = {producto}
            />
          ))
          
        )}
      </div>

      <p className='text-xl mt-10'>
        Total : {''}
      </p>

      <form className='w-full'>
        <div className="mt-5">
          <input
            type="submit"
            className='bg-indigo-600 hover:bg-indigo-800 py-2 font-bold text-white rounded uppercase text-center w-full'
            value="Confirmar pedido"
          />
        </div>
      </form>
    </aside>
  )
}
