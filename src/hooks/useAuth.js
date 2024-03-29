import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import clienteAxios from "../config/axios"
import useSWR, { mutate } from "swr"

export const useAuth = ({ middlewere, url }) => {

    const token = localStorage.getItem('AUTH_TOKEN')
    const navigate = useNavigate()

    const { data: user, error } = useSWR('/api/user', () =>
        clienteAxios('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.data)
            .catch(error => {
                throw Error(error?.response?.data?.errors)
            })
    )

    const login = (datos, setErrores) => {
        const respuesta = clienteAxios.post('/api/login', datos)

        respuesta.then(response => {
            localStorage.setItem('AUTH_TOKEN', response.data.token)
            setErrores([]);
            //volver a llamar useSWR
            mutate()
        })
            .catch(error => {
                setErrores(Object.values(error.response.data.errors));
            })
    }

    const registro = (datos, setErrores) => {
        const respuesta = clienteAxios.post('/api/registro', datos)

        respuesta.then(response => {
            localStorage.setItem('AUTH_TOKEN', response.data.token)
            setErrores([])
            mutate()
        })
        .catch(error => {
            setErrores(Object.values(error.response.data.errors));
        })
    }

    const logout = async () => {
        try {
            await clienteAxios.post('/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)

        } catch (error) {
            throw Error(error?.response?.data?.errors)
        }
    }

    useEffect(() => {
        if (middlewere === 'guess' && url && user) {
            navigate(url)
        }

        if(middlewere === 'guess' && user && user.admin){
            navigate('/admin')
        }

        if(middlewere === 'admin' && user && !user.admin){
            navigate('/')
        }

        if (middlewere === 'auth' && error) {
            navigate('/auth/login')
        }

    }, [user, error])

    return {
        login,
        registro,
        logout,
        user,
        error
    }

}