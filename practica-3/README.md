# Práctica 3 — Catálogo de Productos

## 1. PASOS PARA EJECUTAR

Para empezar clona el proyecto desde github con el siguiente comando:

```bash
git clone https://github.com/viictorga/Practicas-Front.git
```

Después vamos a entrar en la carpeta para poder ejecutar con los siguientes comandos:

```bash
cd Practicas-Front
cd practica-3
```

Una vez aquí dentro nos descargaremos las dependencias necesarias con el siguiente comando:

```bash
npm install
```

Una vez instaladas las dependencias el comando de ejecución es el siguiente:

```bash
npm run dev
```

El proyecto se ejecutará en modo desarrollo y Next mostrará en consola la URL local donde podrás acceder desde el navegador (normalmente http://localhost:3000).

---

## 2. ESTRUCTURACIÓN DEL CÓDIGO

Dentro de la carpeta `src` podemos encontrarnos con varias carpetas: `app`, `components`, `types` y `lib`.

El archivo `page.tsx` es el que se encarga de tener la estructura principal del HTML y el que realiza la lógica de ejecución de las llamadas con un control de errores y loading. También gestiona el estado de búsqueda, que reside en este componente padre y se pasa hacia abajo a los hijos mediante props.

El archivo `page.css` y `globals.css` son los archivos principales del estilo para `page.tsx`. (los cuales estan vacios porque no hizo falta añadir contenido global)

En la carpeta `types` encontramos el único tipo que tiene el proyecto, que sería un único `Product` que devuelve la API con todos sus atributos: título, precio, stock, imágenes, dimensiones, reseñas, etc.

En la carpeta `components` nos encontramos con los siguientes archivos:

- **`productCard.tsx` / `productCard.css`**: función que recibe por parámetros un solo `Product` y se encarga de representar su información en forma de tarjeta. Se utiliza en `page.tsx` mediante un `.map()` para renderizar n tarjetas, siendo n la cantidad de productos que coinciden con el filtro de búsqueda activo.
- **`searchBar.tsx` / `searchBar.css`**: componente hijo independiente que recibe por props el setter del estado del padre (`setSearch`). Al escribir en el input modifica directamente el estado de `page.tsx`, provocando que la lista de productos se actualice en tiempo real sin necesidad de un botón de búsqueda.
- **`cantidadDeResultados/resultProductos.tsx`**: componente que recibe el array de productos ya filtrados y muestra cuántos coinciden con la búsqueda actual.
- **`elementosDeLaInterfaz.tsx` / `page.css`**: componente de la página de detalle que muestra la galería de imágenes del producto con navegación anterior/siguiente, el precio, el stock y el botón de volver atrás.
- **`datosAdicionales.tsx` / `page.css`**: componente de la página de detalle que muestra la información extendida del producto: descripción, marca, valoración, dimensiones y peso.

En la carpeta `lib/api` guardamos en funciones las 3 llamadas que utilizaremos de forma recurrente en el proyecto:

- **`getAllProducts.ts`**: no recibe ningún parámetro y devuelve un array con todos los productos del catálogo.
- **`getProductById.ts`**: necesita por parámetros un `id` numérico y devuelve el objeto completo del producto solicitado.
- **`api.ts`**: no recibe ningún parámetro y se basa en inicar el cliente de axios y que sea utilizada por las otras dos llamadas de arriba.
---

## 3. COMPORTAMIENTO DE LA PÁGINA

En la página aparecerá un header con el título y se mostrarán todos los productos del catálogo de forma automática. Si quieres buscar alguno en concreto únicamente tendrás que ir al input y escribir el nombre; no tiene que ser exacto, la lista se actualiza en tiempo real mientras escribes. Una vez hagas la búsqueda también aparecerá un botón para borrar el filtro y volver al listado completo, junto con un contador que indica cuántos productos coinciden.

Cuando quieras ver la información detallada de un producto aparecerá el botón "Ver detalles" en cada tarjeta, el cual te llevará directamente a una nueva ruta `/products/[id]`, mostrando así la galería de imágenes, el precio, el stock, la descripción completa, la marca, la valoración y las dimensiones del producto.

---

## 4. FUNCIONALIDADES IMPLEMENTADAS

- Control de estados con `useState`
- Gestión de efectos con `useEffect`
- Control de loading
- Control de errores
- Renderización con `.map()`
- Filtrado en tiempo real mientras se escribe
- Enrutamiento dinámico con Next.js (`/products/[id]`)
- Componentización modular
- Elevación de estado : el estado de búsqueda reside en el padre y se pasa al hijo `SearchBar` mediante props
- Componentes wrapper con `children: React.ReactNode` (`CardWrapper`)
- Galería de imágenes con navegación anterior/siguiente

---

## 5. PROBLEMAS

**5.1.** La galería de imágenes del detalle presenta un array de longitud variable según el producto. Se añadió lógica de límite en los botones de navegación para que no se pueda ir más allá del primer o último índice, desactivando el botón correspondiente con el atributo `disabled`.