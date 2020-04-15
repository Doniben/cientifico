import Header from '../templates/header';
import Home from '../pages/home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact', 
}
// Empujará el header a la aplicación
const router = async () => {
    //traidos por id en index.html
    //elementos hacia los cuales puedo hacer render
    const header = null || document.getElementById('header');  
    const content = null || document.getElementById('content');

    //Me permitará enviar el template de header hacia la vista
    header.innerHTML = await Header(); //await para que el render suceda

    let hash = getHash(); //obtengo hash en que se encuentre o la sección en la que se mueve
    let route = await resolveRoutes(hash); //Manejamos la ruta, esperamos porque resolve hace validaciones, le pasamos el hash que acabamos de obtener
    // Routes usará brackets notation para pasarle el string que queremos encontrar. por ejemplo si se pasa el solo /, retornaría el home.
    // routes es la estructura y route la ruta que traemos del hash 
    // El if ternario lo que hará será validar si el contenido retorna un elemento lo mostraré ene l bloque.
    // En caso contrario, dentro del ternario, que no se puede acceder al elemento, es decir que no existe, se mostrará el error404
    let render = routes[route] ? routes[route] : Error404; //Render contendrá el valor de las rutas que acabamos de obtener comparafas con las dadas por el usuario
    content.innerHTML = await render(); //Content, la sección enq ue se mueve el usuario, se le hace un innerHtml de Render, para desplegar el contenido.
};

export default router;
