export default function Categoria({categoria}) {

    const {icono, id, nombre} = categoria

  return (
    <div className="flex items-center gap-4 border w-full p-3 bg-amber-400 hover:bg-amber-500 cursor-pointer">
      <img 
      src={`../../public/img/icono_${icono}.svg`} 
      alt="Imagen icono"
      className="w-12" 
      />

      <p className="font-bold text-lg cursor-pointer truncate">{nombre}</p>
    </div>
  )
}
