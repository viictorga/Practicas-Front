"use client"

import { LoginGuapo } from "@/lib/api/login"
import { RegisterGuapo } from "@/lib/api/register"
import { useRouter } from "next/navigation"
import { useState } from "react"
import "./page.css"




const PaginaIdentificacion = () =>{
    const router = useRouter();
    const [iniciarSesion, setiniciarSesion] = useState<boolean>(true)
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    

    return (
  <div className="pagina-identificacion">
    <div className="cajaLogin">
      <h1>NebrijaSocial</h1>
      <div className="cajaInfo">

        {/* ← este div es clave */}
        <div className="tab-buttons">
          <button
            className={iniciarSesion ? "active" : ""}
            onClick={() => setiniciarSesion(true)}
          >
            Iniciar Sesión
          </button>
          <button
            className={!iniciarSesion ? "active" : ""}
            onClick={() => { setiniciarSesion(false) }}
          >
            Crear Cuenta
          </button>
        </div>

        <div className="cajaInputs">
          {iniciarSesion && (
            <div>
              <p>Email</p>
              <input placeholder="tu@nebrija.es" onChange={(e) => setEmail(e.target.value)} />
              <p>Contraseña</p>
              <input placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} />
              <button className="btnSubmit" onClick={async () => {
                try {
                  const res = await LoginGuapo(email, password)
                  const token = res.token
                  document.cookie = `Authorization=Bearer${token}; path=/`
                  router.push("/principal")
                } catch (e) {
                  console.error("ERROR:", e)
                }
              }}>
                Iniciar Sesión
              </button>
            </div>
          )}
          {!iniciarSesion && (
            <div>
              <p>Username</p>
              <input placeholder="tu_usuario" onChange={(e) => setUsername(e.target.value)} />
              <p>Email</p>
              <input placeholder="tu@nebrija.es" onChange={(e) => setEmail(e.target.value)} />
              <p>Contraseña</p>
              <input placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} />
              <button className="btnSubmit" onClick={() => {
                RegisterGuapo(username, email, password).then((res) => {
                  const token = res.token
                  document.cookie = `Authorization=Bearer${token}; path=/`
                  router.push("/principal")
                })
              }}>
                Crear Cuenta
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  </div>
)
}
export default PaginaIdentificacion;