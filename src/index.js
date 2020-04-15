import router from './routes';

//Utilizamos window, un valor que permite saber si en el navegador la aplicación está en su contexto
//AddEventListener escucha si algo sucede, si la carga de la página sucede.
window.addEventListener('load', router);

//Nuevo evento quese encargará de escuchar las rutas del hash al cuál nos estamos moviendo.
//Va a estar escuchando cuando el hash cambie. Así tenemos la lógica pra cuando cargue la página 
//por primera vez y para cuando haya un cambio en la página.
window.addEventListener('hashchange', router)