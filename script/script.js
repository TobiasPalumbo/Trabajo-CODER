
//Comenten todas los llamados de la funciones para que no se haga un descontrol 

const productos = [
    {id:1, nombre:"butaca halo", precio: 22339 },
    {id:2, nombre:"silla de comer", precio: 23399 },
    {id:3, nombre:"andador kiddy", precio: 20000 },
    {id:4, nombre:"silla de comer booster", precio: 23399 },
    {id:5, nombre:"butaca Sena", precio: 31399}
];

const carrito = [];

let objeto = 0;

class CrearProductos{
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
};

//Añadrir productos a lista

function agregarProductos(){
let id = parseInt(prompt("Ingresa el id del producto"));
let nombre = prompt("Ingresa el nombre del producto");
let precio = parseFloat(prompt("Ingresa el precio del producto"));
const producto = new CrearProductos (id, nombre, precio)
productos.push(producto);
console.log(productos)
};

//  agregarProductos()

// Busqueda de precio menor a 30000 / tambien ordena el precio de menor a mayor por debajo de los 30000
function busquedaPrecio () {
    const precioMenor = productos.filter(el => el.precio < 30000);
    precioMenor.sort((a,b) =>{
    if(a.precio > b.precio){
        return 1
    }
    if(a.precio < b.precio){
        return - 1
    }
    return 0 
} )
console.log(precioMenor);
}

//Funcion para comprar los poductos, esta agrega los productos al Array Carrito luego suma el precio dando un total

function comprar(){
    let busquedas = prompt("Que producto deseas comprar?").toLowerCase()
    let objeto = productos.find(el => el.nombre == busquedas);
    carrito.push(objeto);
    //Suma el todo el precio del los producto agragados al carrtio
    const totalPrecio = carrito.reduce((cont, el) => cont + el.precio, 0)
    console.log(carrito)
    console.log(totalPrecio)

}
comprar()

comprar()

