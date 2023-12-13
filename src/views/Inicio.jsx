import {productos} from '../data/productos'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco'

export default function Inicio() {

  const {hola} = useQuiosco()

  console.log('====================================');
  console.log(hola);
  console.log('====================================');

  return (
    <>
      <h1 className='text-4xl font-black'>Inicio</h1>
      <p className='text-2xl my-10'>Elige y personaliza tu pedido a continuación</p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productos.map(producto => (
            <Producto
              key={producto.id}
              producto={producto}
            />
        ))}
      </div>
    </>
  )
}
