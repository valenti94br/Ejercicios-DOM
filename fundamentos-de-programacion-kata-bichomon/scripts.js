console.log(document.title);

/*1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".*/

const tituloGen1 = document.querySelector("#gen-1")
tituloGen1.textContent = "Generasión 1 Pokimon"

/*2. Cambia el color de fondo de la primera generación de Pokimon.*/

const fondoGen = document.getElementsByClassName("infocard-list")[0]
for (const fondo of fondoGen.children) {
    fondo.style.background = '#00aae4'
}

/*3. Imprime por consola la URL de la página.*/

console.log(document.URL)

/*4. Imprime por consola el dominio de la página.*/

console.log(document.domain)

/*5. Imprime todos los nodos de imagen.*/

console.log(document.getElementsByTagName("img"))

/*6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"*/

const imagenTodo = document.querySelectorAll("img")
for (const imagen of imagenTodo) {
    imagen.setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")
}

/*7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`*/

const fondoVolador = document.getElementsByClassName("itype flying")
for (const fondoV of fondoVolador) {
    fondoV.parentNode.parentNode.style.background = '#FFFF00';
}

