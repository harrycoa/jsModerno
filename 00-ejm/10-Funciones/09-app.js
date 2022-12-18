// Los métodos de propiedad son funciones con una sintaxis similar a las de un método..

// también llegan a ser muy comunes sobretodo porque es un objeto grande con todas las funciones...



// Tambien los métodos pueden quedarse por fuera

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo la cancion con id ${id}`)
    }
}

reproductor.reproducir(5);

reproductor.borrar = function(id) {
    console.log(`Eliminando la cancion con id ${id}`)
}

reproductor.borrar(10);