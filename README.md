# MyKey · Ecommerce de claves digitales

Landing y carrito profesional para vender claves digitales con entrega inmediata. Incluye catálogo autogestionado, buscador, filtros, carrito persistente y experiencia de checkout asistida con SweetAlert.

## Requisitos
- Node.js 18+ (solo para gestionar dependencias si quieres usar SweetAlert2 desde `node_modules`; el sitio funciona como estático)

## Uso
1. Instala dependencias opcionalmente:
   ```bash
   npm install
   ```
2. Levanta un servidor estático (puedes usar `npx http-server .` o la extensión Live Server) y abre `http://localhost:8080`.
3. Explora el catálogo, añade juegos al carrito y finaliza la compra para ver el flujo completo.

## Funcionalidades clave
- Catálogo dinámico cargado desde `juegos.json` con indicadores de stock y precio promedio.
- Buscador en vivo y ordenamiento por precio o stock.
- Carrito lateral con control de cantidades, persistencia en `localStorage` y validación de stock.
- Registro e inicio de sesión locales con saludo personalizado utilizando tu nombre.
- Alterna modo claro/oscuro con animación y preferencia persistente.
- Selector de idioma EN/ES con preferencia persistente y textos comerciales traducidos automáticamente.
- UI moderna con CTA, beneficios, vitrinas visuales y secciones de confianza para reforzar conversión.
- Recursos automáticos y libres (loremflickr para visuales contextuales, Logoipsum para marcas, avatares generados en línea) listos para usarse sin descargas manuales.
- Notificaciones rápidas con SweetAlert2.

## Estructura
- `index.html`: Maquetado principal y secciones del ecommerce.
- `css/estilos.css`: Estilos globales, componentes y layout responsivo.
- `js/app.js`: Lógica de catálogo, filtros, carrito y checkout.
- `juegos.json`: Catálogo editable de juegos (nombre, precio, stock e imagen).

## Personalización
1. Actualiza `juegos.json` con nuevas claves o stock.
2. Sustituye imágenes en `img/` con las portadas correspondientes.
3. Ajusta colores o tipografías en `css/estilos.css`.
4. Ajusta textos comerciales o traducciones en el objeto `textos` dentro de `js/app.js` para mantener sincronizados los idiomas.

¡Listo! MyKey queda lista para presentarla como un ecommerce profesional completo.
