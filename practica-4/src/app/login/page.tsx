"use client"

import { LoginGuapo } from "@/lib/api/login"
import { RegisterGuapo } from "@/lib/api/register"
import { useRouter } from "next/navigation"
import { useState } from "react"




const PaginaIdentificacion = () =>{
    const router = useRouter();
    const [iniciarSesion, setiniciarSesion] = useState<boolean>(true)
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    

    return(
        <div className="cajaLogin">
            <h1>NebrijaSocial</h1>


            <div className="cajaInfo">
                <button onClick={()=>setiniciarSesion(true)}> Iniciar Sesion</button>
                <button onClick={()=>{setiniciarSesion(false); console.log("boton iniciar sesion")}}> Crear Cuenta</button>
                <div className="cajaInputs">
                    {iniciarSesion && (<div>
                        <p>Email</p>    
                        <input placeholder="tu@nebrija.es" onChange={(e) => setEmail(e.target.value)}></input>
                        <p>Contraseña</p>
                        <input placeholder="******" onChange={(e) => setPassword(e.target.value)}></input>
                        <button onClick={async () => {
    console.log("CLICK LOGIN");

    try {
        const res = await LoginGuapo(email, password);
        console.log("RESPUESTA:", res);

        const token = res.token;

        document.cookie = `Authorization=Bearer${token}; path=/`;

        console.log("COOKIE:", document.cookie);

        router.push("/principal");
    } catch (e) {
        console.error("ERROR:", e);
    }
}}>
Iniciar Sesion
</button>
                     </div>
                     
                )}
                    {!iniciarSesion && (<div>
                        <p>Username</p>    
                        <input placeholder="tu_usuario" onChange={(e) => setUsername(e.target.value)}></input>
                        <p>Email</p>    
                        <input placeholder="tu@nebrija.es" onChange={(e) => setEmail(e.target.value)}></input>
                        <p>Contraseña</p>
                        <input placeholder="t*****" onChange={(e) => setPassword(e.target.value)}></input>
                        <button onClick={()=>{
                            RegisterGuapo(username,email,password).then((res)=>{
                                const token = res.token
                                document.cookie = `Authorization=Bearer${token}; path=/`
                                router.push("/principal")
                            })
                        }}>Crear Cuenta</button>
                     </div>
                )}
                </div>
                
            </div>
        </div>  
    )
}
export default PaginaIdentificacion;