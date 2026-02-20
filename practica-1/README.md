1.-PASOS PARA EJECUTAR
Para empezar clona el proyecto desde github con el siguiente comando:
git clone https://github.com/viictorga/Practicas-Front.git
Despues vamos a entrar en la carpeta para poder ejecutar con los siguientes comandos:
cd Practicas-Front
cd practica-1
Una vez aqui dentro nos descargaremos las dependencias necesarias con el siguiente comando:
npm install
Una vez instaladas las dependencias el comando de ejecucion es el siguiente: 
npm run dev
El proyecto se ejecutará en modo desarrollo y Vite mostrará en consola 
la URL local donde podrás acceder desde el navegador (normalmente http://localhost:5173).


2.-ESTRUCTURACION DEL CODIGO

Dentro de la carpeta src podemos encontrarnos con varias carpetas, entre ellas components, types y diferentes archivos .css y .tsx

El archivo App.tsx es el que se encarga de tener la estrucutura principal del html y el que realiza la logica de ejecucion de las llamadas con un control de errores + loading, tambien añadimos la paginacion en este archivo

El archivo App.css e index.css son los archivos principales del estilo para App.tsx, he utilizado un proyecto de una pagina web de rick&morty para muchas de las caracteristicas que hay en estos .css

En la carpeta types encontramos el unico tipo que tiene el proyecto, que seria un unico caracter que devuelve la api con sus atributos

En la carpeta components nos encontramos otras 4 carpetas: loading, error, characterList, characterCard.

- En loading podremos encontrar un archivo .tsx el cual devolvera un header con un loading en el caso de que loading este en true.
- Lo mismo pasa con la carpeta error, la cual devolvera la informmacion del error en un header si la variable error es true.
- En la carpeta characterList encontraremos un archivo.tsx el cual recibira un array de Character, esta funcion devolvera un map el cual con cada uno de los personajes llamara a la funcion PersonajeCarta.
- En la carpeta de characterCard encontramos la funcion anteriormente nombrada esta funcion recibiria como parametros una key, que sera el nombre del personaje y el personaje en si, ambas siendo opcionales, esta funcion se encargara de enseñar en html la informacion solicitada del personaje que le hayamos pasado por parametros.

3.-COMPORTAMIENTO DE LA PAGINA

En la pagina aparecera un header con el titulo y un pequeño parrafo en el que se indican cuales son las paginas maximas
Tambien mostrará la pagina en la que estas actualmente si scrolleas hacia abajo veras la informacion de algunos personajes hasta llegar a su fin, cuando llegues aparecera el boton "Ver mas" el cual lo que hara es cargar mas personajes manteniendo los anteiores, haciendo asi que puedas ver una pagina mas de personajes y reflejando en que pagina estas actualmente arriba en el parrafo anteriormente nombreado, cuando llegues al limite de paginas te saltara un alert el cual te indicara que has llegado a su fin

4.-FUNCIONALIDADES IMPLEMENTADAS
- Control de estados con useState
- Gestion de efectos 
- Control de loading
- Control de errores
- Paginación acumulativa
- Renderizacion con map
- Componetizado modularmente

