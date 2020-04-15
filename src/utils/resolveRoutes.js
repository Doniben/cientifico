const resolveRoutes = (route) => {
    //Route traerá un / o un id, si no, será una sección en la que navega el usuario.
    //El id de los personajes no será mayor a 1000, por lo tanto el largo del id no puede ser mayor a 3 caracteres.
    if (route.length <= 3) {
        // validRoute validará si es un / y de no sé así, retornará un /:id. De esta manera se garantiza que no haya un valor aleatorio  sino que sí se cumple con la sección de rutas.
        let validRoute = route === '/' ? route : '/:id';
        return validRoute
    }
    //Para el caso de about, que es mayor a 3, debemos retornar ese elemento para luego compararlo en la sección de rutas
    // Con lso template literal se envía la ruta que recibimos en el route. Esto retornará: /about
    return `/${route}`;
};

export default resolveRoutes;  