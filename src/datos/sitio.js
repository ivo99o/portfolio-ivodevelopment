export const SITIO = {
  nombre: 'ivo_devlpmt',
  titular: 'Desarrollo web y sistemas a medida',
  bajada:
    'Hola, soy Iván Mena, pero me dicen ivo, estudiante de la UTN. Diseño y programo páginas web y sistemas de gestión para emprendedores y negocios: simples de usar, rápidos y pensados para tu forma de trabajar.',
  whatsapp: '5493813043167',
  mensajeWhatsapp: 'Hola Ivo, vi tu portfolio y quiero consultarte por un proyecto.',
  github: 'https://github.com/ivo99o',
  instagram: 'https://instagram.com/ivo_devlpmt',
  instagramUsuario: '@ivo_devlpmt',
  email: 'ivanmena0499@gmail.com',
  ubicacion: 'Tucumán, Argentina',
}

export const NAVEGACION = [
  { id: 'proyectos', texto: 'Proyectos' },
  { id: 'servicios', texto: 'Servicios' },
  { id: 'herramientas', texto: 'Herramientas' },
  { id: 'contacto', texto: 'Contacto' },
]

export const SERVICIOS = [
  {
    icono: 'web',
    titulo: 'Páginas web a medida',
    texto: 'Sitios modernos y responsive para presentar tu negocio, tus productos o tu trabajo.',
  },
  {
    icono: 'sistema',
    titulo: 'Sistemas de gestión',
    texto: 'Paneles para administrar clientes, turnos, stock, facturas o lo que tu negocio necesite.',
  },
  {
    icono: 'mensaje',
    titulo: 'Avisos y automatizaciones',
    texto: 'Recordatorios por WhatsApp, comprobantes en PDF y tareas repetitivas resueltas solas.',
  },
  {
    icono: 'nube',
    titulo: 'Publicación y puesta en marcha',
    texto: 'Dejo todo online, con base de datos, login de usuarios y listo para usar desde el día uno.',
  },
]

export const STACK = [
  {
    grupo: 'Lo que ve el usuario',
    texto: 'La parte visual: pantallas, botones y formularios que se ven bien en celular y en compu.',
    items: ['React', 'Vite', 'React Router', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    grupo: 'El motor por detrás',
    texto: 'La lógica que procesa los datos, controla quién puede entrar y responde a cada acción.',
    items: ['Node.js', 'Express', 'JWT', 'API REST'],
  },
  {
    grupo: 'Dónde se guarda la información',
    texto: 'Bases de datos y almacenamiento para que tu información esté ordenada y segura.',
    items: ['PostgreSQL', 'Supabase', 'MongoDB', 'Cloudinary'],
  },
  {
    grupo: 'Conexiones con otros servicios',
    texto: 'Avisos por WhatsApp, documentos en PDF y publicación en internet.',
    items: ['Twilio WhatsApp', 'whatsapp-web.js', 'PDF', 'Vercel'],
  },
]
