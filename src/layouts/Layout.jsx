import { Outlet } from 'react-router-dom'
import ReactModal from 'react-modal'
ReactModal.setAppElement('*'); // suppresses modal-related test warnings.
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import ModalProducto from '../components/ModalProducto';
import useQuiosco from '../hooks/useQuiosco'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Layout() {

  const { modal, handleClickModal } = useQuiosco();

  return (
    <>
      <section>
        <img src="../../public/img/b.png" className='fixed z-0 opacity-20 w-full h-screen' alt="" />
      </section>

      <div className='md:flex relative'>
        <Sidebar />
        <main className='flex-1 h-screen overflow-y-scroll p-5'>
          <Outlet />
        </main>
        <Resumen />
      </div>


      <ReactModal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </ReactModal>



    </>

  )
}
