import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'

export default function Layout() {
  return (
    <>

      <section>
        <img src="../../public/img/b.png" className='fixed z-0 opacity-20 w-full h-screen' alt="" />
      </section>

      <div className='md:flex relative z-10 '>
        <Sidebar />
        <main className='flex-1 h-screen overflow-y-scroll p-5 z-10'>
          <Outlet />
        </main>
        <Resumen />
      </div>
    </>

  )
}
