 //función que retorna vista que necesitamos
 import getData from '../utils/getData';

 const Home = async () => { //establecer la estructura que necesitamos con un arrow-function
    //template con comillas francesas. permiten trabajar multlinea
    // Para hacer el llamado de los personajes convertimos la función agregando assync y awai en la constante
    // Como esta sección es el home no pasaremos un id, por lo que hará el llamado a la api de manera standard
    const characters = await getData();

    const view = 
    //convertiremos el template para poder hacer iteración con cada personaje que estamos recibiendo
    // En el template accederemos a las variables de cada personaje
    // Utilizaremos el valor de character para movernos de forma dinámica dentro de la applicación web
    // Lista la estructura, esta configuración nos creará un bloque en forma de arregla que debemos unirlo utilizando join y 
    // estableciéndole como parámetro que no utilice ninguna forma de separarlo con ('')
    ` 
        <div class="Cheracters">
            ${characters.results.map(character => `
                <article class="Character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')}
        </div>
    `;
    return view;
 }

 export default Home;