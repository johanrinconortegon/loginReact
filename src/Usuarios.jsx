import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Usuarios({recargar}) {
  const [usuarios, setUsuarios] = useState([])

  async function obtenerUsuarios() {
    const peticion = await fetch(import.meta.env.VITE_HOSTBACKEND+'/usuarios', { credentials: 'include' })
    if (peticion.ok) {
      const respuesta = await peticion.json()
      setUsuarios(respuesta)
    }
  }

  async function eliminarUsuario(id) {
    const peticion = await fetch(import.meta.env.VITE_HOSTBACKEND+'/usuarios?id=' + id, { credentials: 'include', method: 'delete' })
    if (peticion.ok) {
      alert('Usuario eliminado')
      obtenerUsuarios();
    }
  }

  useEffect(() => {
    obtenerUsuarios()
  }, [recargar])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Usuario</th>
            <th>Clave</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(usuario => (
              <tr key={usuario.id}>
                <th>{usuario.id}</th>
                <th>{usuario.usuario}</th>
                <th>{usuario.clave}</th>
                <th>
                  <button
                    onClick={() => { eliminarUsuario(usuario.id) }}
                  >X</button>
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
export default Usuarios
