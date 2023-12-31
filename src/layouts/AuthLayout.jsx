import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-18 flex flex-col items-center md:flex-row">

      <img
        src="../../public/img/logo.svg"
        alt="Imagen logotipo"
        className="max-w-xs"

      />

      <div className="p-10 w-full">
        <Outlet />
      </div>


    </main>
  )

}
