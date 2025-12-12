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
  usuario: JSON.parse(localStorage.getItem('usuario')) || null,
  sesionActiva: localStorage.getItem('sesionActiva') === 'true',
  tema: localStorage.getItem('tema') || 'dark',
  idioma: localStorage.getItem('idioma') || 'en',
};

const textos = {
  en: {
    nav: {
      inicio: 'Home',
      catalogo: 'Catalog',
      beneficios: 'Benefits',
      contacto: 'Contact',
    },
    header: {
      verCatalogo: 'View catalog',
      carrito: 'My cart',
      cambiarIdioma: 'Switch language',
    },
    auth: {
      iniciar: 'Sign in',
      registro: 'Sign up',
      cerrar: 'Sign out',
    },
    hero: {
      eyebrow: 'Instant delivery · 100% official keys',
      titulo: 'Pick your next game with confidence',
      descripcion:
        'Curated catalog with iconic titles, transparent prices, and 24/7 support. Get your digital key in minutes and start playing.',
      explorar: 'Browse catalog',
      destacados: 'View featured',
      pillGarantia: 'Activation guarantee',
      pillPagos: 'Secure payments',
      pillSoporte: 'Support in Spanish',
      stock: 'Available stock',
      stockHelper: 'Updated in real time',
      valor: 'Average value',
      valorHelper: 'Based on current catalog',
      badge: 'Curated by gamers',
      bienvenida: ({ nombre }) => `Welcome, ${nombre}. Ready to play!`,
    },
    partners: {
      eyebrow: 'Brands that trust us',
    },
    beneficios: {
      eyebrow: 'Why choose MyKey',
      titulo: 'A buying experience built for gamers',
      descripcion:
        'Local payments, guided activation, and notifications at every step so you only worry about playing.',
      entrega: 'Instant delivery',
      entregaTexto: 'Receive your activation code in minutes with email confirmation.',
      proteccion: 'Anti-fraud protection',
      proteccionTexto: 'We validate each key and refund you if there are activation issues.',
      soporte: 'Dedicated support',
      soporteTexto: 'Spanish-speaking agents available 24/7 via chat and email.',
    },
    catalogo: {
      eyebrow: 'Catalog',
      titulo: 'Pick your next title',
      buscar: 'Search',
      placeholderBusqueda: 'E.g. Elden Ring, Resident Evil',
      ordenar: 'Sort by',
      destacados: 'Featured',
      precioAsc: 'Price: low to high',
      precioDesc: 'Price: high to low',
      stock: 'Available stock',
      sinResultados: 'We could not find results for your search.',
      limpiar: 'Clear filters',
    },
    showcase: {
      eyebrow: 'Instant delivery stories',
      titulo: 'Own every session with ready-to-use keys',
      descripcion: 'We capture real setups, community vibes, and elite support using libre, verified resources.',
      tagCatalogo: 'Curated catalog',
      tagSoporte: '24/7 support',
      tagPagos: 'Protected payments',
      card1Titulo: 'Always-updated gamer collection',
      card1Texto: 'We curate the latest editions, DLC, and bundles so you can activate in minutes.',
      card2Titulo: 'Agents who speak your language',
      card2Texto: 'Human guidance via chat, email, and WhatsApp without intrusive bots.',
      card3Titulo: 'Audited and fast gateways',
      card3Texto: 'We process payments with two-factor authentication and anti-fraud checks.',
    },
    confianza: {
      eyebrow: 'Total trust',
      titulo: 'Your purchase is protected',
      descripcion:
        'We work with certified processors and audit every operation. If the key does not activate, we refund your money.',
      item1: 'Official keys with guided activation',
      item2: 'Invoice and proof of purchase',
      item3: 'Real-time notifications',
      item4: 'Support in under 5 minutes',
      soporte: 'Talk to support',
      whatsapp: 'Contact via WhatsApp',
      panelTitulo: 'Safe purchase',
      panelMeta: 'Payments protected with two-factor authentication.',
      pasarela: 'Gateway',
      garantia: 'Warranty',
      garantiaDetalle: 'Up to 30 days',
      envio: 'Delivery',
      envioDetalle: 'Instant',
    },
    equipo: {
      eyebrow: 'Gamer squad',
      titulo: 'We guide you until your game is active',
      descripcion: 'Our squad replies in minutes with real agents. Use whichever channel you prefer.',
      rol1: 'Activation specialist',
      rol2: 'Payments & billing',
      rol3: 'Gamer recommendations',
      ctaTitulo: 'Need help right now?',
      ctaTexto: 'We are online 24/7. Write to us and receive step-by-step activation guides.',
      ctaCorreo: 'Email support',
      ctaWhatsapp: 'Open WhatsApp',
    },
    footer: {
      meta: 'Digital keys for demanding gamers. Made in Argentina.',
      legal: '© 2024 MyKey. All rights reserved.',
    },
    carrito: {
      titulo: 'Cart',
      resumen: 'Purchase summary',
      cerrar: 'Close cart',
      vacio: 'You have not added any games yet. Explore the catalog to begin.',
      volver: 'Go to catalog',
      total: 'Total',
      finalizar: 'Checkout',
      unit: 'each',
      eliminar: 'Remove',
    },
    card: {
      meta: 'Digital key · Instant delivery',
      stock: 'Stock',
      stockLow: 'Last units',
      add: 'Add',
    },
    mensajes: {
      cantidadInvalida: 'Enter a valid quantity',
      stockInsuficiente: 'Not enough stock for that quantity',
      añadido: 'Added to cart',
      carritoVacio: 'Your cart is empty',
      resumenCompra: 'Confirm your purchase',
      pagar: 'Pay now',
      cancelar: 'Cancel',
      compraCompleta: 'Purchase completed! You will receive your key soon.',
      sinRegistroTitulo: 'No account found',
      sinRegistroTexto: 'Create your account first to sign in.',
      actualizaTitulo: 'Update your account',
      actualizaTexto: 'Please register again to enable sign-in.',
      loginTitulo: 'Sign in',
      nombre: 'Name',
      correo: 'Email',
      clave: 'Password',
      registrarTitulo: 'Create account',
      registrarConfirmar: 'Sign up',
      registrarCancelar: 'Cancel',
      registrarCompleta: 'Fill out all fields',
      loginIngresar: 'Sign in',
      loginCompleta: 'Complete both fields',
      datosIncorrectosTitulo: 'Incorrect data',
      datosIncorrectosTexto: 'Check your name and password.',
      sesionIniciada: 'Signed in',
      sesionCerrada: 'Signed out',
      registroCompleto: 'Account created',
      saludoAnon: 'Welcome! Ready to play?',
      compraPregunta: 'Are you sure you want to complete your purchase?',
      carritoVacioInfo: 'Your cart is empty',
      catalogoError: 'Could not fetch the catalog',
    },
    theme: {
      ariaLight: 'Switch to dark mode',
      ariaDark: 'Switch to light mode',
    },
  },
  es: {
    nav: {
      inicio: 'Inicio',
      catalogo: 'Catálogo',
      beneficios: 'Beneficios',
      contacto: 'Contacto',
    },
    header: {
      verCatalogo: 'Ver catálogo',
      carrito: 'Mi carrito',
      cambiarIdioma: 'Cambiar idioma',
    },
    auth: {
      iniciar: 'Iniciar sesión',
      registro: 'Registrarme',
      cerrar: 'Cerrar sesión',
    },
    hero: {
      eyebrow: 'Entrega inmediata · Claves 100% oficiales',
      titulo: 'Elige tu próximo juego con confianza',
      descripcion:
        'Catálogo curado con títulos icónicos, precios transparentes y soporte 24/7. Recibe tu clave digital en minutos y comienza a jugar.',
      explorar: 'Explorar catálogo',
      destacados: 'Ver destacados',
      pillGarantia: 'Garantía de activación',
      pillPagos: 'Pagos seguros',
      pillSoporte: 'Soporte en español',
      stock: 'Stock disponible',
      stockHelper: 'Actualizado en tiempo real',
      valor: 'Valor promedio',
      valorHelper: 'Basado en catálogo actual',
      badge: 'Curado por gamers',
      bienvenida: ({ nombre }) => `Bienvenido, ${nombre}. ¡Listo para jugar!`,
    },
    partners: {
      eyebrow: 'Aliados que confían',
    },
    beneficios: {
      eyebrow: 'Por qué elegir MyKey',
      titulo: 'Experiencia de compra pensada para gamers',
      descripcion:
        'Pagos locales, activación guiada y notificaciones en cada paso. Nuestro equipo se encarga de que solo te preocupes por jugar.',
      entrega: 'Entrega inmediata',
      entregaTexto: 'Recibe tu código de activación en cuestión de minutos con confirmación por correo.',
      proteccion: 'Protección antifraude',
      proteccionTexto: 'Validamos cada clave y ofrecemos reembolso si hay problemas de activación.',
      soporte: 'Soporte dedicado',
      soporteTexto: 'Agentes en español disponibles 24/7 por chat y correo para acompañarte.',
    },
    catalogo: {
      eyebrow: 'Catálogo',
      titulo: 'Escoge tu próximo título',
      buscar: 'Buscar',
      placeholderBusqueda: 'Ej: Elden Ring, Resident Evil',
      ordenar: 'Ordenar por',
      destacados: 'Destacados',
      precioAsc: 'Precio: menor a mayor',
      precioDesc: 'Precio: mayor a menor',
      stock: 'Stock disponible',
      sinResultados: 'No encontramos resultados para tu búsqueda.',
      limpiar: 'Limpiar filtros',
    },
    showcase: {
      eyebrow: 'Historias de entrega inmediata',
      titulo: 'Conquista cada sesión con claves listas para usar',
      descripcion: 'Capturamos setups reales, comunidad y atención de elite con recursos libres y verificados.',
      tagCatalogo: 'Catálogo curado',
      tagSoporte: 'Soporte 24/7',
      tagPagos: 'Pagos protegidos',
      card1Titulo: 'Colección gamer siempre actualizada',
      card1Texto: 'Curamos las últimas ediciones, DLC y bundles para que actives en minutos.',
      card2Titulo: 'Agentes que hablan tu idioma',
      card2Texto: 'Acompañamiento humano por chat, correo y WhatsApp sin bots invasivos.',
      card3Titulo: 'Pasarelas auditadas y rápidas',
      card3Texto: 'Procesamos cobros con autenticación en dos pasos y detección antifraude.',
    },
    confianza: {
      eyebrow: 'Confianza total',
      titulo: 'Tu compra está protegida',
      descripcion:
        'Trabajamos con procesadores certificados y auditamos cada operación. Si la clave no se activa, te devolvemos el dinero.',
      item1: 'Claves oficiales con activación guiada',
      item2: 'Factura y comprobante de compra',
      item3: 'Notificaciones en tiempo real',
      item4: 'Atención en menos de 5 minutos',
      soporte: 'Hablar con soporte',
      whatsapp: 'Contactar por WhatsApp',
      panelTitulo: 'Compra segura',
      panelMeta: 'Pagos protegidos con autenticación en dos pasos.',
      pasarela: 'Pasarela',
      garantia: 'Garantía',
      garantiaDetalle: 'Hasta 30 días',
      envio: 'Envío',
      envioDetalle: 'Inmediato',
    },
    equipo: {
      eyebrow: 'Equipo gamer',
      titulo: 'Te acompañamos hasta activar tu juego',
      descripcion: 'Nuestro squad responde en minutos con agentes reales. Usa los canales que prefieras.',
      rol1: 'Especialista en activación',
      rol2: 'Pagos y facturación',
      rol3: 'Recomendaciones gamer',
      ctaTitulo: '¿Necesitas ayuda ya mismo?',
      ctaTexto: 'Estamos online 24/7. Escríbenos y recibe guías paso a paso para activar tu clave.',
      ctaCorreo: 'Escribir al correo',
      ctaWhatsapp: 'Abrir WhatsApp',
    },
    footer: {
      meta: 'Claves digitales para gamers exigentes. Hecho en Argentina.',
      legal: '© 2024 MyKey. Todos los derechos reservados.',
    },
    carrito: {
      titulo: 'Carrito',
      resumen: 'Resumen de compra',
      cerrar: 'Cerrar carrito',
      vacio: 'Aún no agregaste juegos. Explora el catálogo para comenzar.',
      volver: 'Ir al catálogo',
      total: 'Total',
      finalizar: 'Finalizar compra',
      unit: 'c/u',
      eliminar: 'Eliminar',
    },
    card: {
      meta: 'Clave digital · Entrega inmediata',
      stock: 'Stock',
      stockLow: 'Últimas unidades',
      add: 'Agregar',
    },
    mensajes: {
      cantidadInvalida: 'Ingresa una cantidad válida',
      stockInsuficiente: 'No hay stock suficiente para esta cantidad',
      añadido: 'Añadido al carrito',
      carritoVacio: 'Tu carrito está vacío',
      resumenCompra: 'Confirma tu compra',
      pagar: 'Pagar ahora',
      cancelar: 'Cancelar',
      compraCompleta: '¡Compra completada! Pronto recibirás tu clave.',
      sinRegistroTitulo: 'Sin registro',
      sinRegistroTexto: 'Primero crea tu cuenta para iniciar sesión.',
      actualizaTitulo: 'Actualiza tu cuenta',
      actualizaTexto: 'Vuelve a registrarte para habilitar inicio de sesión.',
      loginTitulo: 'Iniciar sesión',
      nombre: 'Nombre',
      correo: 'Correo',
      clave: 'Contraseña',
      registrarTitulo: 'Crear cuenta',
      registrarConfirmar: 'Registrarme',
      registrarCancelar: 'Cancelar',
      registrarCompleta: 'Completa todos los campos',
      loginIngresar: 'Ingresar',
      loginCompleta: 'Completa ambos campos',
      datosIncorrectosTitulo: 'Datos incorrectos',
      datosIncorrectosTexto: 'Revisa tu nombre y contraseña.',
      sesionIniciada: 'Sesión iniciada',
      sesionCerrada: 'Sesión cerrada',
      registroCompleto: 'Registro completado',
      saludoAnon: '¡Bienvenido! ¿Listo para jugar?',
      compraPregunta: '¿Seguro que quieres completar tu compra?',
      carritoVacioInfo: 'Tu carrito está vacío',
      catalogoError: 'No se pudo obtener el catálogo',
    },
    theme: {
      ariaLight: 'Cambiar a modo oscuro',
      ariaDark: 'Cambiar a modo claro',
    },
  },
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
  mensajeBienvenida: document.getElementById('mensajeBienvenida'),
  btnLogin: document.getElementById('btnLogin'),
  btnRegistro: document.getElementById('btnRegistro'),
  btnLogout: document.getElementById('btnLogout'),
  btnTema: document.getElementById('btnTema'),
  btnIdioma: document.getElementById('btnIdioma'),
  menu: document.getElementById('menuContenido'),
  btnMenu: document.getElementById('btnMenu'),
};

function obtenerTraduccion(idioma, key) {
  const partes = key.split('.');
  let valor = textos[idioma];
  for (const parte of partes) {
    valor = valor?.[parte];
  }
  return valor;
}

function t(key, params = {}) {
  const valor = obtenerTraduccion(state.idioma, key);
  if (typeof valor === 'function') return valor(params);
  if (typeof valor === 'string') {
    return valor.replace(/\{(\w+)\}/g, (_, prop) => params[prop] ?? `{${prop}}`);
  }
  return key;
}

function traducirUI() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const valor = t(el.dataset.i18n);
    if (valor) el.textContent = valor;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const valor = t(el.dataset.i18nPlaceholder);
    if (valor) el.setAttribute('placeholder', valor);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const valor = t(el.dataset.i18nAriaLabel);
    if (valor) el.setAttribute('aria-label', valor);
  });

  if (refs.btnIdioma) {
    refs.btnIdioma.textContent = state.idioma.toUpperCase();
    refs.btnIdioma.setAttribute('aria-label', t('header.cambiarIdioma'));
  }
}

function aplicarIdioma(idioma) {
  state.idioma = idioma;
  localStorage.setItem('idioma', idioma);
  document.documentElement.setAttribute('lang', idioma === 'en' ? 'en' : 'es');
  traducirUI();
  actualizarSaludo();
  renderizarProductos();
  renderizarCarrito();
  aplicarTema(state.tema);
}

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

function toggleMenu(resolver = null) {
  if (!refs.menu || !refs.btnMenu) return;
  const abierta = resolver ?? !refs.menu.classList.contains('is-open');
  refs.menu.classList.toggle('is-open', abierta);
  refs.btnMenu.setAttribute('aria-expanded', abierta);
}

function actualizarSaludo() {
  if (!refs.mensajeBienvenida) return;

  if (state.sesionActiva && state.usuario?.nombre) {
    refs.mensajeBienvenida.textContent = t('hero.bienvenida', { nombre: state.usuario.nombre });
    refs.mensajeBienvenida.hidden = false;
    refs.btnLogin.hidden = true;
    refs.btnRegistro.hidden = true;
    if (refs.btnLogout) refs.btnLogout.hidden = false;
  } else {
    refs.mensajeBienvenida.hidden = true;
    refs.btnLogin.hidden = false;
    refs.btnRegistro.hidden = false;
    if (refs.btnLogout) refs.btnLogout.hidden = true;
  }
}

function guardarSesion() {
  localStorage.setItem('usuario', JSON.stringify(state.usuario));
  localStorage.setItem('sesionActiva', state.sesionActiva);
}

function aplicarTema(tema) {
  state.tema = tema;
  document.documentElement.setAttribute('data-theme', tema);
  localStorage.setItem('tema', tema);

  if (refs.btnTema) {
    const icono = tema === 'light' ? '☀️' : '🌙';
    refs.btnTema.querySelector('.theme-toggle__icon').textContent = icono;
    refs.btnTema.classList.add('theme-toggle--animate');
    setTimeout(() => refs.btnTema.classList.remove('theme-toggle--animate'), 450);
    refs.btnTema.setAttribute('aria-label', tema === 'light' ? t('theme.ariaLight') : t('theme.ariaDark'));
  }
}

function actualizarIndicadores() {
  const stockTotal = state.productos.reduce((acc, p) => acc + p.cantidad, 0);
  const valorPromedio = state.productos.length
    ? state.productos.reduce((acc, p) => acc + p.precio, 0) / state.productos.length
    : 0;

  const unidad = state.idioma === 'en' ? 'keys' : 'claves';
  refs.stockDisponible.textContent = `${stockTotal} ${unidad}`;
  refs.valorPromedio.textContent = formatter.format(valorPromedio);
}

function registrarUsuario() {
  Swal.fire({
    title: t('mensajes.registrarTitulo'),
    html: `
      <div class="form-grid">
        <input id="regNombre" class="swal2-input" placeholder="${t('mensajes.nombre')}" autocomplete="name">
        <input id="regEmail" class="swal2-input" placeholder="${t('mensajes.correo')}" type="email" autocomplete="email">
        <input id="regClave" class="swal2-input" placeholder="${t('mensajes.clave')}" type="password" autocomplete="new-password">
      </div>
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: t('mensajes.registrarConfirmar'),
    cancelButtonText: t('mensajes.registrarCancelar'),
    preConfirm: () => {
      const nombre = document.getElementById('regNombre').value.trim();
      const correo = document.getElementById('regEmail').value.trim();
      const clave = document.getElementById('regClave').value.trim();

      if (!nombre || !correo || !clave) {
        Swal.showValidationMessage(t('mensajes.registrarCompleta'));
        return false;
      }

      return { nombre, correo, clave };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      state.usuario = result.value;
      state.sesionActiva = true;
      guardarSesion();
      actualizarSaludo();
      toast(t('mensajes.registroCompleto'));
    }
  });
}

function iniciarSesion() {
  if (!state.usuario) {
    Swal.fire(t('mensajes.sinRegistroTitulo'), t('mensajes.sinRegistroTexto'), 'info');
    return;
  }

  if (!state.usuario.clave) {
    Swal.fire(t('mensajes.actualizaTitulo'), t('mensajes.actualizaTexto'), 'info');
    return;
  }

  Swal.fire({
    title: t('mensajes.loginTitulo'),
    html: `
      <div class="form-grid">
        <input id="loginNombre" class="swal2-input" placeholder="${t('mensajes.nombre')}" value="${state.usuario.nombre}" autocomplete="name">
        <input id="loginClave" class="swal2-input" placeholder="${t('mensajes.clave')}" type="password" autocomplete="current-password">
      </div>
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: t('mensajes.loginIngresar'),
    cancelButtonText: t('mensajes.cancelar'),
    preConfirm: () => {
      const nombre = document.getElementById('loginNombre').value.trim();
      const clave = document.getElementById('loginClave').value.trim();
      if (!nombre || !clave) {
        Swal.showValidationMessage(t('mensajes.loginCompleta'));
        return false;
      }
      return { nombre, clave };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      if (
        result.value.nombre.toLowerCase() === state.usuario.nombre.toLowerCase() &&
        result.value.clave === state.usuario.clave
      ) {
        state.sesionActiva = true;
        guardarSesion();
        actualizarSaludo();
        toast(t('mensajes.sesionIniciada'));
      } else {
        Swal.fire(t('mensajes.datosIncorrectosTitulo'), t('mensajes.datosIncorrectosTexto'), 'error');
      }
    }
  });
}

function cerrarSesion() {
  state.sesionActiva = false;
  guardarSesion();
  actualizarSaludo();
  toast(t('mensajes.sesionCerrada'), 'info');
}

function renderizarProductos() {
  const termino = refs.buscador.value.trim().toLowerCase();
  const orden = refs.ordenar.value;

  let productos = [...state.productos];

  if (!productos.length) {
    refs.listaProductos.innerHTML = '';
    refs.estadoVacio.hidden = true;
    return;
  }

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
    const estadoStock = producto.cantidad <= 2 ? t('card.stockLow') : t('card.stock');
    card.innerHTML = `
      <div class="card__media">
        <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>
      <div class="card__body">
        <div>
          <p class="card__title">${producto.nombre}</p>
          <p class="card__meta">${t('card.meta')}</p>
        </div>
        <div class="stock-chip ${producto.cantidad <= 2 ? 'stock-chip--low' : ''}">
          ${estadoStock}: ${producto.cantidad}
        </div>
        <div class="price">${formatter.format(producto.precio)}</div>
        <div class="quantity">
          <input type="number" min="1" max="${producto.cantidad}" value="1" data-producto="${id}">
          <button class="btn btn--primary" data-add="${id}">${t('card.add')}</button>
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
        <p class="cart__meta">${formatter.format(item.precio)} ${t('carrito.unit')}</p>
      </div>
      <div class="cart__actions" data-index="${idx}">
        <button data-action="decrease">-</button>
        <span>${item.cantidadSeleccionada}</span>
        <button data-action="increase">+</button>
        <button data-action="remove" title="${t('carrito.eliminar')}">✕</button>
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
    toast(t('mensajes.stockInsuficiente'), 'error');
    return;
  }

  const existente = state.carrito.find((i) => i.nombre === producto.nombre);
  if (existente) {
    existente.cantidadSeleccionada += cantidad;
  } else {
    state.carrito.push({ ...producto, cantidadSeleccionada: cantidad });
  }

  toast(t('mensajes.añadido'));
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
    toast(t('mensajes.carritoVacio'), 'info');
    return;
  }

  const resumen = state.carrito
    .map((item) => `${item.nombre} x${item.cantidadSeleccionada}`)
    .join('\n');

  Swal.fire({
    title: t('mensajes.resumenCompra'),
    text: resumen,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: t('mensajes.pagar'),
    cancelButtonText: t('mensajes.cancelar'),
  }).then((result) => {
    if (result.isConfirmed) {
      toast(t('mensajes.compraCompleta'));
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
        toast(t('mensajes.cantidadInvalida'), 'error');
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

  refs.btnRegistro.addEventListener('click', registrarUsuario);
  refs.btnLogin.addEventListener('click', () => {
    if (!state.sesionActiva) {
      iniciarSesion();
    }
  });

  refs.btnLogout?.addEventListener('click', cerrarSesion);

  refs.btnMenu?.addEventListener('click', () => toggleMenu());
  document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  refs.btnTema.addEventListener('click', () => {
    const siguienteTema = state.tema === 'dark' ? 'light' : 'dark';
    aplicarTema(siguienteTema);
  });

  refs.btnIdioma?.addEventListener('click', () => {
    const siguienteIdioma = state.idioma === 'en' ? 'es' : 'en';
    aplicarIdioma(siguienteIdioma);
  });
}

async function cargarProductos() {
  try {
    const res = await fetch('juegos.json');
    if (!res.ok) throw new Error(t('mensajes.catalogoError'));
    const data = await res.json();
    state.productos = data;
    actualizarIndicadores();
    renderizarProductos();
  } catch (error) {
    Swal.fire('Error', error.message, 'error');
  }
}

(function init() {
  aplicarIdioma(state.idioma);
  toggleMenu(false);
  inicializarEventos();
  cargarProductos();
})();
