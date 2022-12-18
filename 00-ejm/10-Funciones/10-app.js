// Los arrow functions son otra forma de declarar funciones y fueron agregadas en las últimas especificaciones de ecmaScript
const aprendiendo = function() {
    console.log('Apriendiendo Javascript');
}

// const aprendiendo2 = () => console.log('Apriendiendo 2 Javascript');

aprendiendo()
// aprendiendo2()

// Parametros en un arrow Function...
const aprendiendo2 = tecnologia => console.log(`Apriendiendo ${tecnologia}`);
aprendiendo2('Javascript');
// ForEach y Map con arrow functions...
const paises = ['Uruguay, Argentina, Chile, Peru, Colombia, Venezuela']

paises.forEach(pais => console.log(pais))