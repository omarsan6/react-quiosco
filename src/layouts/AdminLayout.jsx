import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminLayout() {

  useAuth({middlewere: 'admin'})

  return (
    <div className='md:flex relative bg-slate-50'>
        <AdminSidebar/>

        <main className='flex-1 h-screen overflow-y-scroll p-5'>
          <Outlet />
        </main>

      </div>
  )
}
