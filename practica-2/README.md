1.-PASOS PARA EJECUTAR
Para empezar clona el proyecto desde github con el siguiente comando:
git clone https://github.com/viictorga/Practicas-Front.git
Despues vamos a entrar en la carpeta para poder ejecutar con los siguientes comandos:
cd Practicas-Front
cd practica-2
Una vez aqui dentro nos descargaremos las dependencias necesarias con el siguiente comando:
npm install
Una vez instaladas las dependencias el comando de ejecucion es el siguiente: 
npm run dev
El proyecto se ejecutará en modo desarrollo y Next mostrará en consola 
la URL local donde podrás acceder desde el navegador (normalmente http://localhost:3000).


2.-ESTRUCTURACION DEL CODIGO

Dentro de la carpeta src podemos encontrarnos con varias carpetas, entre ellas components, types, una carpeta country que dentro tiene una llamada [ name ] para el enrutamiento y diferentes archivos .css y .tsx.

El archivo page.tsx es el que se encarga de tener la estructura principal del HTML y el que realiza la lógica de ejecución de las llamadas con un control de errores + loading. También añadimos la paginación en este archivo.

El archivo page.css e index.css son los archivos principales del estilo para page.tsx. He utilizado un proyecto de una página web de Rick & Morty para muchas de las características que hay en estos .css.

En la carpeta types encontramos el único tipo que tiene el proyecto, que sería un único Country que devuelve la API con sus atributos.

En la carpeta components nos encontramos 2 archivos: CountryCard.tsx y page.css.

En page.css guardamos todos los estilos del arrchivo CountryCard.tsx

En cambio en el archivo CountryCard.tsx lo que tenemos es una funcion que recibe por parametros un solo Country y esta tendra la funcion de representar la informacion de ese country, la utilizaremos en el page.tsx para  hacer unn map y llamar a la funcion n veces, siendo n la cantidad de paises que queremos enseñar al usuario y en cada iteracion mostrando uno de los paises

En la carpeta lib/api guardamos en funciones las 2 llamadas que utilizaremos de forma recurrente en el proyecto: getAllCountries.ts y getCountriesByName.ts

- getAllCountries.ts no recibe ningun parametro y devolvera un array en el que en cada posicion se guardara, las flags del pais, sus nombres y su population
- getCountriesByName.ts necesitara por parametros un string, este sera el nombre del pais que quieras buscar, devolvera un array en el cual la posicion 0 estara toda la informacion del country que hemos solicitado


3.-COMPORTAMIENTO DE LA PAGINA

En la pagina aparecera un header con el titulo tambien mostrará todos los paises que hay en la API de forma automatica, si quieres buscar alguno en concreto unica mente tendras que ir al input y escribir el nombre, no tiene que ser exacto, una vez haces la busqueda los paises se actualizaran y ademas aparecera un boton en rojo llamado borra filtros para borrar lo que hayas escrito en el input, cuando quieras seleccionar un pais para ver si informacion detallada aparecera el boton "Ver mas" en cada uno de los paises el cual lo que hara es llevarte directamente a una nueva ruta /name/[ name ], haciendo asi que veas directamente la informacion de un unico pais

4.-FUNCIONALIDADES IMPLEMENTADAS
- Control de estados con useState
- Gestion de efectos 
- Control de loading
- Control de errores
- Paginación acumulativa
- Renderizacion con map
- Enrutamiento con Next
- Componetizado modularmente

5.-PROBLEMAS 

5.1.- La API cuando accedes al endpoint de buscar un solo pais por nombre te devuelve ese unico pais en un array, estando este en la posicion 0, teniendo asi que cambiar diferentes tipados y asignar directamente la posicion 0 del res.data al estado de manera directa
5.2.- Otro de los problemas encontrados fue realizar la busqueda por nombre, dado que si el usuario no escribe un nombre exacto tienes que mostrar todos los paises que tengan coincidencia en el nombre con el texto escrito, la API no tenia ningun endpoint para este caso lo que nos obligaba a solucionar el problema con logica interna, esta la intente aplicar en un useEffect pero al tener dos el programma se volvia deficiente a nivel optimizacion y decicido hacerlo directamente en el map de la llamada al componente CountryCard.tsx
5.3- El tercer problema fue mostrar los datos solicitados que nos pedian, dado que eran el nombre, el png de la flag y la population, para conseguir estos datos no servia ningun endpoint de ejemplo que proporcionaba la pagina, tuvimos que modificar uno para que nos diese justo los parametros que queriamos sin que sobre ni que falte