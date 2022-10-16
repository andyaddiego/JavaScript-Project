/*-----------Validación de edad----------*/
//Creo un Modal para que se sobreponga//
const set_modal = document.getElementById("modal_container");

function open_first_time_modal() {
  let container = document.createElement("div");
  container.innerHTML = `
    <dialog open id="modal"> 
  <img src="img/logoDialog.png" class="logo">
  <h1>BIENVENIDO/A</h1>
  <h2>INGRESA TU EDAD</h2>
  <input type="number" class="inputs" id="input_age">
  <button id="close_modal">Ingresar</button>
  </dialog>
    `;
  set_modal.appendChild(container);
  set_modal.classList.add("modal_container");
}

const get_age = JSON.parse(localStorage.getItem("edad"));

if (get_age < 18 || get_age === "") {
  open_first_time_modal();
  const close_modal = document.getElementById("close_modal");

  const modal = document.getElementById("modal");

  close_modal.addEventListener("click", function () {
    let input_age = document.getElementById("input_age");

    if (input_age?.value < 18) {
      Swal.fire({
        icon: "error",
        text: "Regresa cuando cumplas 18",
        confirmButtonColor: '#252525'
      });
    } else if (input_age?.value >= 18) {
      localStorage.setItem("edad", JSON.stringify(input_age.value));
      modal?.close();
      set_modal.classList.remove("modal_container");
    }
  });
} else {
}

/*-----------Matemáticas del total del carrito----------*/
const total_carrito = () => {
  let total = document.getElementById("total");
  total.innerHTML = "";
  let carrito_storage = JSON.parse(localStorage.getItem("carrito"));
  if (carrito_storage.length === 0) {
    total.innerHTML = `<h2>Carrito Vacío</h2>`;
    ocultar()
    function ocultar(){
      document.getElementById("finalizar").style.display = 'none';
    }
  } else {
    const monto_total = carrito_storage.reduce(
      (acc, producto) =>
        (acc += parseInt(
          producto.precio
            ? producto.precio
                .split("")
                .filter((simbolo) => simbolo !== "$")
                .join("")
            : ""
        )),
      0
    );
    total.innerHTML = "";
    total.innerHTML = `Importe Total $${monto_total}`;
    show()
    function show(){
      document.getElementById("finalizar").style.display = 'block';
    }

  }
};

/*-----------Creo mi array de objetos/productos----------*/
const lista_articulo = [
  {
    producto: "Pisco",
    marca: "Capel",
    ml: 1000,
    precio: 1000,
    stock: 2,
    imagen: "img/piscoCapel.png",
    pack: false,
    descuento: true,
  },

  {
    producto: "Vodka",
    marca: "Absolut",
    ml: 750,
    precio: 1200,
    stock: 15,
    imagen: "img/vodkaAbsolut.png",
    pack: false,
    descuento: false,
  },

  {
    producto: "Gin",
    marca: "Tanqueray",
    ml: 750,
    precio: 1400,
    stock: 3,
    imagen: "img/ginTanqueray.png",
    pack: false,
    descuento: true,
  },

  {
    producto: "Whisky",
    marca: "Fireball",
    ml: 750,
    precio: 2100,
    stock: 10,
    imagen: "img/whiskyFireball.png",
    pack: false,
    descuento: true,
  },

  {
    producto: "Ron",
    marca: "Bacardi",
    ml: 750,
    precio: 780,
    stock: 5,
    imagen: "img/ronBacardi.png",
    pack: false,
    descuento: true,
  },

  {
    producto: "Whisky",
    marca: "Jack Daniels",
    ml: 750,
    precio: 4000,
    stock: 5,
    imagen: "img/whiskyJack.png",
    pack: false,
    descuento: false,
  },

  {
    producto: "Whisky",
    marca: "Johnnie Walker",
    ml: 750,
    precio: 950,
    stock: 30,
    imagen: "img/whiskyJohnnie.png",
    pack: false,
    descuento: true,
  },

  {
    producto: "Gin",
    marca: "Puerto de Indias",
    ml: 700,
    precio: 1200,
    stock: 18,
    imagen: "img/ginPuertodeindias.png",
    pack: false,
    descuento: false,
  },
  {
    producto: "Pack Chill",
    marca: "Absolut",
    precio: 3000,
    ml: 34343243,
    stock: 30,
    imagen: "img/pack1.png",
    pack: true,
    descuento: false,
  },

  {
    producto: "Pack Midnight",
    marca: "Absolut",
    precio: 2800,
    ml: 34343243,
    stock: 30,
    imagen: "img/pack2.png",
    pack: true,
    descuento: false,
  },

  {
    producto: "Pack Sunset",
    marca: "Absolut",
    precio: 3200,
    ml: 34343243,
    stock: 30,
    imagen: "img/pack3.png",
    pack: true,
    descuento: false,
  },

  {
    producto: "Pack Peace",
    marca: "Absolut",
    precio: 3000,
    ml: 34343243,
    stock: 30,
    imagen: "img/pack4.png",
    pack: true,
    descuento: false,
  },
  {
    producto: "Gin",
    marca: "Bombay Saphire",
    ml: 750,
    precio: 850,
    stock: 2,
    imagen: "img/bombayAzul.png",
    pack: false,
    descuento: false,
  },

  {
    producto: "Gin",
    marca: "Bombay Bramble",
    ml: 750,
    precio: 950,
    stock: 4,
    imagen: "img/bombayRojo.png",
    pack: false,
    descuento: false,
  },

  {
    producto: "Champagne",
    marca: "Chandon",
    ml: 750,
    precio: 850,
    stock: 4,
    imagen: "img/champagneChandon.png",
    pack: false,
    descuento: false,
  },

  {
    producto: "Champagne",
    marca: "Lanson",
    ml: 750,
    precio: 3700,
    stock: 4,
    imagen: "img/champagneLanson.png",
    pack: false,
    descuento: false,
  },

  {
    producto: "Gin",
    marca: "Beefeater 24",
    ml: 1000,
    precio: 2100,
    stock: 3,
    imagen: "img/ginBeefeater24.png",
    pack: false,
    descuento: false,
  },

  {
    producto: "Gin",
    marca: "Beefeater Pink",
    ml: 750,
    precio: 1200,
    stock: 1,
    imagen: "img/ginBeefeaterPink.png",
    pack: false,
    descuento: false,
  },

  {
    producto: "Licor",
    marca: "Jagermeister",
    ml: 700,
    precio: 1100,
    stock: 4,
    imagen: "img/jagermeister.png",
    pack: false,
    descuento: false,
  },

  {
    producto: "Vermuth",
    marca: "Martini Bianco",
    ml: 1000,
    precio: 400,
    stock: 4,
    imagen: "img/martiniBianco.png",
    pack: false,
    descuento: true,
  },

  {
    producto: "Vermuth",
    marca: "Martini Rosso",
    ml: 1000,
    precio: 450,
    stock: 1,
    imagen: "img/martiniRosso.png",
    pack: false,
    descuento: true,
  },

  {
    producto: "Pisco",
    marca: "Alto del Carmen",
    ml: 750,
    precio: 800,
    stock: 8,
    imagen: "img/piscoCarmen.png",
    pack: false,
    descuento: true,
  },

  {
    producto: "Ron",
    marca: "Bacardi Oakheart",
    ml: 750,
    precio: 600,
    stock: 5,
    imagen: "img/ronBacardiOak.png",
    pack: false,
    descuento: false,
  },

  {
    producto: "Whisky",
    marca: "Jameson",
    ml: 1000,
    precio: 1200,
    stock: 5,
    imagen: "img/whiskyJameson.png",
    pack: false,
    descuento: false,
  },
];

/*------------Sección del Carrito------------------*/
let carrito;

let carrito_local = JSON.parse(localStorage.getItem("carrito"));

if (!carrito_local) {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

/*-----------DOM----------*/
const contenedor_productos = document.getElementById("contenedor_productos");
const contenedor_ofertas = document.getElementById("contenedor_ofertas");
const contenedor_absolut = document.getElementById("contenedor_absolut");

document.addEventListener("DOMContentLoaded", function () {
  mostrar_bebidas();
});

function mostrar_bebidas() {
  lista_articulo.forEach(function (p) {
    const div_bebida = document.createElement("div");
    div_bebida.classList.add("card");

    const imagen_bebida = document.createElement("img");
    imagen_bebida.src = p.imagen;
    imagen_bebida.className = "imagen_bebida zoom";

    const nombre_bebida = document.createElement("h2");
    nombre_bebida.textContent = `${p.producto} ${p.marca}`;
    nombre_bebida.classList.add("titulo_producto");

    const precio_bebida = document.createElement("p");

    precio_bebida.textContent = `$${
      p.descuento === true ? p.precio - (p.precio * 10) / 100 : p.precio
    }`;
    precio_bebida.classList.add("titulo_producto");

    const boton_agregar = document.createElement("button");
    boton_agregar.textContent = "Añadir al carrito";
    boton_agregar.classList.add("button_add");

    div_bebida.appendChild(imagen_bebida);
    div_bebida.appendChild(nombre_bebida);
    div_bebida.appendChild(precio_bebida);
    div_bebida.appendChild(boton_agregar);

    if (p.pack == false && p.descuento == false) {
      contenedor_productos.appendChild(div_bebida);
    } else if (p.pack == true) {
      contenedor_absolut.append(div_bebida);
    } else if (p.descuento == true) {
      contenedor_ofertas.append(div_bebida);
    }
  });

  let boton_comprar = document.getElementsByClassName("button_add");

  for (let boton of boton_comprar) {
    boton.addEventListener("click", agregar_al_carrito);
  }

/*-----------Agregar items a mi carrito----------*/
  function agregar_al_carrito(e) {
    carrito = JSON.parse(localStorage.getItem("carrito"));

    let hijo = e.target; 
    let padre = hijo.parentNode;

    let nombre_bebida = padre.querySelector("h2").textContent; 
    let precio_bebida = padre.querySelector("p").textContent; 
    let imagen_bebida = padre.querySelector("img").src;

    /*-----------Creo mi objeto para renderizar en el carrito----------*/
    let producto_carrito = {
      img: imagen_bebida,
      nombre: nombre_bebida,
      cantidad: 1,
      precio: precio_bebida,
    };

    let mismo_producto = carrito.some(
      (p) => p.nombre === producto_carrito.nombre
    );

    if (mismo_producto) {
      let producto_carrito_ = carrito.map((p) => { 
        if (p.nombre === producto_carrito.nombre) {
          p.cantidad++;
          return p;
        } else {
          return p;
        }
      });

    /*-----------Pusheo mis objetos al carrito----------*/
      carrito = [...producto_carrito_];
    } else {
      carrito = [...carrito, producto_carrito];
    }

    /*-----------Local Storage----------*/
    let carrito_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carrito_JSON);

    let tabla = document.getElementById("tbody");
    tabla.innerHTML = "";
    mostrar_carrito(carrito);
    total_carrito();
    Toastify({
      text: "Añadido al carrito",
      duration: 1000,
      style: {
        fontFamily: "Roboto",
        background: "black",
        color: "white",
      },
      onClick: function () {},
    }).showToast();
  } //ACA TERMINA LA FUNCION AGREGAR AL CARRITO
} //ACA TERMINA LA FUNCION MOSTRAR BEBIDAS

/*-----------Render del carrito----------*/
function mostrar_carrito(carrito) {
  for (let p of carrito) {
    let precio = p.precio
      ? parseInt(
          p.precio
            .split("")
            .filter((simbolo) => simbolo !== "$")
            .join("")
        )
      : "";

    let fila = document.createElement("tr"); 
    fila.classList.add("container_card_carrito");
    fila.innerHTML = `<td><img src="${p.img}" class="mini"></td>  
                          <td>${p.cantidad}</td>
                          <td>${precio * p.cantidad}</td> 
                          <td><button class="eliminar_del_carrito">Borrar</button></td>`;

    let tabla = document.getElementById("tbody");
    tabla.append(fila);

    let botones_borrar = fila.querySelector(".eliminar_del_carrito");

    botones_borrar.addEventListener("click", function () {
      borrar_producto(fila, p);
    });
    total_carrito();
  }
} //ACA TERMINA EL RENDER DEL CARRITO

function borrar_producto(abuelo) {
  let imgs = abuelo.getElementsByTagName("img");
  abuelo.remove();

  for (let img of imgs) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito = carrito.filter((p) => p.img !== img.src);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    total_carrito();
    return carrito;
  }
  mostrar_carrito(carrito);
}

function cargar_storage() {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  mostrar_carrito(carrito);
  total_carrito();
}

if (carrito_local !== 0) {
  cargar_storage();
} //ESTE ES EL FIN DE LA FUNCION QUE MUESTRA LAS BEBIDAS

/*-----------Mostrar y ocultar el carrito----------*/
let boton_carrito = document.getElementById("mostrar_carrito");

boton_carrito.addEventListener("click", function () {
  let carrito = document.getElementById("carrito");

  if (carrito.style.display != "none") {
    carrito.style.display = "none";
  } else {
    carrito.style.display = "block";
  }
});

let boton_borrar_carrito = document.getElementById("finalizar");

boton_borrar_carrito.addEventListener("click", finalizar_compra);

/*-----------Finalizar compra: borra los items y el local storage----------*/
function finalizar_compra() {
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  let tabla = document.getElementById("tbody");
  tabla.innerHTML = "";
  total_carrito();
  Swal.fire({
    title: 'Gracias por tu compra!',
    text: 'A la brevedad recibiras un correo con el detalle',
    imageUrl: 'img/drinkScriptColor.png',
    imageWidth: 400,
    imageHeight: 80,
    confirmButtonColor: '#252525'
  })
  ocultar_carrito();
  function ocultar_carrito(){
    document.getElementById("carrito").style.display = 'none';
  }
}

/*------Eventos, event listeners-----*/
/*---Submit---*/
let form_suscribe = document.getElementById("form_suscribe");
form_suscribe.addEventListener(
  "submit_suscribe",
  function ({ preventDefault }) { 
    preventDefault(); 

    let email = document.getElementById("email");

    console.log("El mail del usuario es : ", email?.value);
  }
); 

/*---Mouseover/Mouseout---*/
let img_colores = document.getElementById("logo");

img_colores.addEventListener("mouseover", function () {
  img_colores.src = "img/drinkScriptColor.png";
});

img_colores.addEventListener("mouseout", function () {
  img_colores.src = "img/drinkScript.png";
});


/*---Formulario Contacto---*/
const btn = document.getElementById("button_send");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_n7xk0q7";

  emailjs.sendForm(serviceID, templateID, this).then( //equivale a peticion POST
    () => {
      btn.value = "Enviar";
      Swal.fire({
        icon: "success",
        text: "Mensaje Enviado",
        confirmButtonColor: '#252525'
      });
    },
    (err) => {
      btn.value = "Enviar";
      alert(JSON.stringify(err));
    }
  );
});

/*------Buscador-----*/
document.addEventListener("keyup", (e) => {
  if (e.target.matches("#search")) {
    document.querySelectorAll(".card").forEach((elemento) => {
      elemento.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? elemento.classList.remove("filtro") 
        : elemento.classList.add("filtro");
    });
  }
});

/*------Window.scrollTo()-----*/
const wst0 = document.getElementById("wst0");
wst0.addEventListener("click", function(){
  window.scrollTo(0, 676)
});

const wst1 = document.getElementById("wst1");
wst1.addEventListener("click", function(){
  window.scrollTo(0, 1730)
}); 

const wst2 = document.getElementById("wst2");
wst2.addEventListener("click", function(){
  window.scrollTo(0, 2136)
}); 

const wst3 = document.getElementById("wst3");
wst3.addEventListener("click", function(){
  window.scrollTo(0, 2896)
}); 

const wst4 = document.getElementById("wst4");
wst4.addEventListener("click", function(){
  window.scrollTo(0, 2896)
});

const up = document.getElementById("up");
up.addEventListener("click", function() {
  window.scrollTo(0,0)
});