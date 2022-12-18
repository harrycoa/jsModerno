//Un callback no es mas que una función que se pasa como parámetro a otra función

const paises = ['Uruguay', 'Argentina', 'Chile', 'Peru', 'Colombia', 'Venezuela'];

imprimirPaises()

function agregarPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais)
        callback()
    }, 2000)
}

function imprimirPaises() {
    debugger
    setTimeout(() => {
        // paises.forEach(pais => {
        //     console.log(pais)
        // })
        console.table(paises)
    }, 1000)
}   

agregarPais('Brasil', imprimirPaises)