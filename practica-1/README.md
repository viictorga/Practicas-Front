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

Dentro de la carpeta src podemos encontrarnos con varias carpetas, entre ellas components, types y diferentes archivos .css y .tsx.

El archivo App.tsx es el que se encarga de tener la estructura principal del HTML y el que realiza la lógica de ejecución de las llamadas con un control de errores + loading. También añadimos la paginación en este archivo.

El archivo App.css e index.css son los archivos principales del estilo para App.tsx. He utilizado un proyecto de una página web de Rick & Morty para muchas de las características que hay en estos .css.

En la carpeta types encontramos el único tipo que tiene el proyecto, que sería un único Character que devuelve la API con sus atributos.

En la carpeta components nos encontramos otras 4 carpetas: loading, error, characterList, characterCard.

En loading podremos encontrar un archivo .tsx el cual devolverá un header con un loading en el caso de que loading esté en true.

Lo mismo pasa con la carpeta error, la cual devolverá la información del error en un header si la variable error es true.

En la carpeta characterList encontraremos un archivo .tsx el cual recibirá un array de Character. Esta función devolverá un map, el cual con cada uno de los personajes llamará a la función PersonajeCarta.

En la carpeta characterCard encontramos la función anteriormente nombrada. Esta función recibiría como parámetros una key, que será el nombre del personaje, y el personaje en sí, ambas siendo opcionales. Esta función se encargará de enseñar en HTML la información solicitada del personaje que le hayamos pasado por parámetros.

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

5.-PROBLEMAS 

    1.- Uno de los problemas que surgio fue la llamada a funciones en codigo html, tuve que pasar los parametros como objeto porque si los pasaba directamente no me compilaba, en la funcion characterCard, ademas tuve que pasar una key, porque el objeto del personaje en si no valia
    2.- Otra de los problemas fue controlar cuando se pasaba de la pagina maxima, la solucion fue tener una variable con las paginas maximas y ser capaces de cuando falle la ejecucion del get por una pagina inexistente hacer el control de si ese error estaba provocado por la pagina y si era el case lanzar una alert al usuario