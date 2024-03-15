/**Funcionalidad para mostrar la ventana de ordenes */
const cart = document.querySelector('.header-nav')
const cartCerar = document.querySelector("#cerrar")
cart.addEventListener('click', mostrarOrders)

function mostrarOrders(){
    const ventanaCarrito= document.querySelector('.contenedor-cart');
   if(ventanaCarrito.style.display === 'none'){
     ventanaCarrito.style.display ='block'
   }else{
    ventanaCarrito.style.display ='none'
   }

   cartCerar.addEventListener('click', () => {
    ventanaCarrito.style.display ='none'
   });
}


/** Funciones para llenar los productos
document.addEventListener('DOMContentLoaded', function() {
    crearProductos();
});**/

const productos = [

    {
        "id":1, 
        "imagen": "img/cappuccino.webp",
        "nombre":"Capuccino",
        "price": 5.20,
        "quanty": 1,
        "raiting": 4.75,
        "vote": 65   
    },
    { 
        "id":2,     
        "imagen": "img/housecoffe.webp",
        "nombre":"House Coffee",
        "price": 3.50,
        "quanty": 1,
        "raiting": 4.85,
        "vote": 14   
    },
    { 
        "id":3, 
        "imagen": "img/expresso.webp",
        "nombre":"Expresso Coffee",
        "price": 2.50,
        "quanty": 1,
        "raiting": 4.95,
        "vote": 55   
    },
    { 
        "id":4,     
        "imagen": "img/cafechocolate.webp",
        "nombre":"Coffee Chocolate",
        "price": 4.00,
        "quanty": 1,
        "raiting": 4.65,
        "vote": 122 
    },
    { 
        "id":4, 
        "imagen": "img/valentine.webp",
        "nombre":"Valenties Day Cofee",
        "price": 5.50,
        "quanty": 1,
        "raiting":4.25,
        "vote": 50  
    },
]

const contenedorProductos = document.querySelector('.contenedor-productos');

productos.forEach( producto =>  {

    const div = document.createElement('div');
    div.classList.add('box-producto');
    div.innerHTML= ` 
    
            <div class="box-producto-img">
                <img src="${producto.imagen}" alt="">
            </div>
            <div class="box-producto-info">
                <h3>${producto.nombre}</h3>
                <p>Interactovely embra interactive
                    extend revoluti markets
                </p>
            </div>
            <div class="box-producto-price">
                        <p> $${producto.price}</p>
                        <p class="boton-agregar" id="${producto.id}">Agregar</p>
            </div>
    `
    contenedorProductos.append(div);
});



const arrayProducto = [];
/**FUNCIONALIDADES PARA EL BOTON AGREGAR**/

const botonAgregar = document.querySelectorAll('.boton-agregar');   
botonAgregar.forEach( boton => {
    boton.addEventListener('click', () => {
        //Capturo el Id del producto que se encuentra en el boton
        const proId = parseInt(boton.id);
        //Hago la busqueda del objeto
        const productoAgregar = productos.find( productos => productos.id === proId);

        //Verifico si el producto ya fue agregado
        
        const productoRepetido = arrayProducto.find( producto => producto.id === proId)
        if(productoRepetido){
            productoRepetido.quanty++;
            
          
        }
        else{     
        //Agrego al nuevo array
        arrayProducto.push(productoAgregar);

        }
        actualizarCarrito();
        
    });
});


/**Actualizar Carrito**/
// Función para actualizar el carrito
const contenedorOrders = document.querySelector('.contenedor-orders');
function actualizarCarrito() {


        let totalCarrito = 0;
         // Limpiar el contenido del contenedor
         contenedorOrders.innerHTML = '';
         arrayProducto.forEach( producto => {
             const div = document.createElement('div');
             div.classList.add('cart-order');
             const precioTotalProducto = producto.price*producto.quanty
             totalCarrito = totalCarrito + precioTotalProducto;
             div.innerHTML = `
             
             <div class="cart-orders-img">
                         <img src="${producto.imagen}" alt="">
                     </div>
                     <div class="cart-orders-info">
                         <p class="nombre">${producto.nombre}</p>
                         <p class="cantidad">${producto.quanty}</p>
                         <p class="price">$${precioTotalProducto}</p>
                     </div>
                     <div class="remove-order">
                         <i class='bx bx-trash' id=${producto.id} ></i>
                     </div>
             `
             contenedorOrders.append(div);
         });

         const precioTotalCarrito = document.querySelector('.amount')
         precioTotalCarrito.textContent = `$ ${totalCarrito} `;
         

}




/** Funciona para el total a pagar**/









