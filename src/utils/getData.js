//Acceso a personajes de la api
const API = 'https://rickandmortyapi.com/api/character/';

// Creamos función que nos llamará la api para hacer render
//
const getData = async (id) => {
    //si la función no recibe un id entonces traerá el llamado por defecto, que será api.
    //Si recibe un id generaremos una nueva url que llamará al personaje que deseamos
    // En el if ternario si recibimos un id retornaremos la url de la api concatenándole el id
    // Si no hay id traerá sólo api para hacer render del home
    const apiURL = id ? `${API}${id}` : API;
    // llamado al fetch de los elementos
    // encapsulamos los llamados en un try catch
    try {
        // response hará el llamado a fetch. 
        // usamos await para que espere a que el llamado se haga
        const response = await fetch(apiURL);
        // ahora debemos convertir la respuesta que nos da el servidor en un objeto json iterable
        const data = await response.json();
        return data;
        // como buena práctica generamos nuestro caso por si hay un error
    } catch (error) {
        console.log('Fetch Error', error);
        };
    };

    export default getData;