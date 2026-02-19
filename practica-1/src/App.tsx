import { useEffect, useState } from 'react'
import axios from "axios";
import type { Character } from './types'
import './App.css'
import { LoadingInfo } from './components/loading/loading';
import { Errorcin } from './components/error/error';
import { Lista } from './components/characterList/characterList';

const App =() =>{
  const [pagina, setPagina] = useState<number>(1);
  const [personajes, setPersonajes] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [miError, setError] = useState<string | null>(null);
 

  useEffect(()=>{
   let url = `https://swapi.dev/api/people/?page=${pagina}`
  
  axios.get(url)
      .then(res => {
        console.log(res.data.results);
        setPersonajes([...personajes, ...res.data.results]);

        setError(null)
      })
      .catch((e) => {
        setError(`Error cargando los datos: ${e.message ? e.message: e}`)
      })
      .finally(()=>{
        setLoading(false);
      })  

  }, [pagina]);
  

  return (
    <div className="todo">
      <h1>Lista de Personajes de Star Wars</h1>
      {loading && <LoadingInfo/>}
      {miError && <Errorcin errorr={miError} />}

      <div>
          <Lista personajes={personajes}/>      
      </div>
      
      <button onClick={()=> {setPagina(pagina +1)}}> Ver mas</button>

      
    </div>
  )
}

export default App
