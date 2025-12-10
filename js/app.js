function normalizarCarrito(datos) {
  if (!Array.isArray(datos)) return [];
  return datos.map((item) =>
    item.juego
      ? { ...item.juego, cantidadSeleccionada: item.cantidad }
      : {
          ...item,
          cantidadSeleccionada: item.cantidadSeleccionada || item.cantidad || 1,
        }
  );
}

const state = {
  productos: [],
  carrito: normalizarCarrito(JSON.parse(localStorage.getItem('carrito')) || []),
};

const refs = {
  listaProductos: document.getElementById('listaProductos'),
  listaCarrito: document.getElementById('listaCarrito'),
  carritoVacio: document.getElementById('carritoVacio'),
  badge: document.getElementById('carritoBadge'),
  totalCarrito: document.getElementById('totalCarrito'),
  buscador: document.getElementById('buscador'),
  ordenar: document.getElementById('ordenar'),
  drawer: document.getElementById('drawer'),
  overlay: document.getElementById('drawerOverlay'),
  cerrarDrawer: document.getElementById('cerrarDrawer'),
  btnCarrito: document.getElementById('btnCarrito'),
  btnVerCatalogo: document.getElementById('btnVerCatalogo'),
  ctaCatalogo: document.getElementById('ctaCatalogo'),
  ctaDestacados: document.getElementById('ctaDestacados'),
  estadoVacio: document.getElementById('estadoVacio'),
  limpiarFiltros: document.getElementById('limpiarFiltros'),
  stockDisponible: document.getElementById('stockDisponible'),
  valorPromedio: document.getElementById('valorPromedio'),
};

const formatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

function toast(title, icon = 'success') {
  Swal.fire({
    title,
    icon,
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2200,
    timerProgressBar: true,
  });
}

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(state.carrito));
}

function actualizarIndicadores() {
  const stockTotal = state.productos.reduce((acc, p) => acc + p.cantidad, 0);
  const valorPromedio = state.productos.length
    ? state.productos.reduce((acc, p) => acc + p.precio, 0) / state.productos.length
    : 0;

  refs.stockDisponible.textContent = `${stockTotal} claves`;
  refs.valorPromedio.textContent = formatter.format(valorPromedio);
}

function renderizarProductos() {
  const termino = refs.buscador.value.trim().toLowerCase();
  const orden = refs.ordenar.value;

  let productos = [...state.productos];

  if (termino) {
    productos = productos.filter((p) => p.nombre.toLowerCase().includes(termino));
  }

  switch (orden) {
    case 'price-asc':
      productos.sort((a, b) => a.precio - b.precio);
      break;
    case 'price-desc':
      productos.sort((a, b) => b.precio - a.precio);
      break;
    case 'stock':
      productos.sort((a, b) => b.cantidad - a.cantidad);
      break;
    default:
      productos.sort((a, b) => b.cantidad - a.cantidad || a.precio - b.precio);
  }

  refs.listaProductos.innerHTML = '';

  if (!productos.length) {
    refs.estadoVacio.hidden = false;
    return;
  }

  refs.estadoVacio.hidden = true;

  productos.forEach((producto) => {
    const id = producto.nombre;
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="card__media">
        <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      <div class="card__body">
        <div>
          <p class="card__title">${producto.nombre}</p>
          <p class="card__meta">Clave digital · Entrega inmediata</p>
        </div>
        <div class="stock-chip ${producto.cantidad <= 2 ? 'stock-chip--low' : ''}">
          ${producto.cantidad <= 2 ? 'Últimas unidades' : 'Stock'}: ${producto.cantidad}
        </div>
        <div class="price">${formatter.format(producto.precio)}</div>
        <div class="quantity">
          <input type="number" min="1" max="${producto.cantidad}" value="1" data-producto="${id}">
          <button class="btn btn--primary" data-add="${id}">Agregar</button>
        </div>
      </div>
    `;

    refs.listaProductos.appendChild(card);
  });
}

function renderizarCarrito() {
  refs.listaCarrito.innerHTML = '';
  let total = 0;

  if (!state.carrito.length) {
    refs.carritoVacio.hidden = false;
  } else {
    refs.carritoVacio.hidden = true;
  }

  state.carrito.forEach((item, idx) => {
    total += item.precio * item.cantidadSeleccionada;
    const li = document.createElement('li');
    li.className = 'cart__item';
    li.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <div>
        <p class="cart__title">${item.nombre}</p>
        <p class="cart__meta">${formatter.format(item.precio)} c/u</p>
      </div>
      <div class="cart__actions" data-index="${idx}">
        <button data-action="decrease">-</button>
        <span>${item.cantidadSeleccionada}</span>
        <button data-action="increase">+</button>
        <button data-action="remove" title="Eliminar">✕</button>
      </div>
    `;
    refs.listaCarrito.appendChild(li);
  });

  refs.totalCarrito.textContent = formatter.format(total);
  refs.badge.textContent = state.carrito.reduce((acc, item) => acc + item.cantidadSeleccionada, 0);
  guardarCarrito();
}

function buscarProductoPorId(id) {
  return state.productos.find((p) => p.nombre === id);
}

function agregarAlCarrito(id, cantidad) {
  const producto = buscarProductoPorId(id);
  if (!producto) return;

  const cantidadExistente = state.carrito.find((i) => i.nombre === producto.nombre)?.cantidadSeleccionada || 0;
  const totalSolicitado = cantidadExistente + cantidad;

  if (totalSolicitado > producto.cantidad) {
    toast('No hay stock suficiente para esta cantidad', 'error');
    return;
  }

  const existente = state.carrito.find((i) => i.nombre === producto.nombre);
  if (existente) {
    existente.cantidadSeleccionada += cantidad;
  } else {
    state.carrito.push({ ...producto, cantidadSeleccionada: cantidad });
  }

  toast('Añadido al carrito');
  renderizarCarrito();
}

function actualizarCantidad(index, accion) {
  const item = state.carrito[index];
  if (!item) return;

  if (accion === 'increase' && item.cantidadSeleccionada < item.cantidad) {
    item.cantidadSeleccionada += 1;
  } else if (accion === 'decrease') {
    item.cantidadSeleccionada -= 1;
    if (item.cantidadSeleccionada <= 0) {
      state.carrito.splice(index, 1);
    }
  } else if (accion === 'remove') {
    state.carrito.splice(index, 1);
  }

  renderizarCarrito();
}

function finalizarCompra() {
  if (!state.carrito.length) {
    toast('Tu carrito está vacío', 'info');
    return;
  }

  const resumen = state.carrito
    .map((item) => `${item.nombre} x${item.cantidadSeleccionada}`)
    .join('\n');

  Swal.fire({
    title: 'Confirma tu compra',
    text: resumen,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Pagar ahora',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      toast('¡Compra completada! Pronto recibirás tu clave.');
      state.carrito = [];
      renderizarCarrito();
      refs.drawer.classList.remove('drawer--open');
    }
  });
}

function abrirDrawer() {
  refs.drawer.classList.add('drawer--open');
}

function cerrarDrawer() {
  refs.drawer.classList.remove('drawer--open');
}

function scrollToCatalogo() {
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}

function inicializarEventos() {
  refs.listaProductos.addEventListener('click', (event) => {
    const boton = event.target.closest('[data-add]');
    if (boton) {
      const id = boton.dataset.add;
      const input = refs.listaProductos.querySelector(`input[data-producto="${id}"]`);
      const cantidad = Number(input?.value || 1);
      if (Number.isNaN(cantidad) || cantidad <= 0) {
        toast('Ingresa una cantidad válida', 'error');
        return;
      }
      agregarAlCarrito(id, cantidad);
    }
  });

  refs.listaCarrito.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (!action) return;
    const index = Number(event.target.closest('[data-index]')?.dataset.index);
    actualizarCantidad(index, action);
  });

  refs.buscador.addEventListener('input', renderizarProductos);
  refs.ordenar.addEventListener('change', renderizarProductos);
  refs.limpiarFiltros.addEventListener('click', () => {
    refs.buscador.value = '';
    refs.ordenar.value = 'featured';
    renderizarProductos();
  });

  refs.btnCarrito.addEventListener('click', abrirDrawer);
  refs.overlay.addEventListener('click', cerrarDrawer);
  refs.cerrarDrawer.addEventListener('click', cerrarDrawer);
  document.getElementById('volverCatalogo').addEventListener('click', () => {
    cerrarDrawer();
    scrollToCatalogo();
  });

  document.getElementById('finalizarCompra').addEventListener('click', finalizarCompra);
  refs.btnVerCatalogo.addEventListener('click', scrollToCatalogo);
  refs.ctaCatalogo.addEventListener('click', scrollToCatalogo);
  refs.ctaDestacados.addEventListener('click', scrollToCatalogo);
}

async function cargarProductos() {
  try {
    const res = await fetch('juegos.json');
    if (!res.ok) throw new Error('No se pudo obtener el catálogo');
    const data = await res.json();
    state.productos = data;
    actualizarIndicadores();
    renderizarProductos();
  } catch (error) {
    Swal.fire('Error', error.message, 'error');
  }
}

(function init() {
  inicializarEventos();
  renderizarCarrito();
  cargarProductos();
})();
