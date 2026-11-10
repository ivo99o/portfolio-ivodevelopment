export const PROYECTOS = [
  {
    id: 'crm-taller',
    etiqueta: 'Sistema de gestión',
    titulo: 'CRM para taller de vehículos',
    descripcion:
      'Sistema para administrar un taller: clientes, vehículos, mecánicos, historial y facturas en PDF, con panel de administración y un panel para cada cliente.',
    puntos: [
      'Panel de administración con tablero, clientes, vehículos, mecánicos e historial',
      'Facturas descargables en PDF',
      'Panel de cliente con acceso propio',
      'Envío de avisos por WhatsApp',
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    imagenes: [],
    enlaces: [{ texto: 'Ver código', url: 'https://github.com/ivo99o/CRM-taller', tipo: 'codigo' }],
    nota: 'Sistema privado: mirá las capturas.',
  },
  {
    id: 'tareo',
    etiqueta: 'Demo en vivo',
    titulo: 'tareo, gestor de tareas',
    descripcion:
      'Gestor de tareas con categorías, fechas límite y avisos por WhatsApp cuando una tarea está por vencer. Podés crear una cuenta y probarlo ahora.',
    puntos: [
      'Registro con email o cuenta de Google',
      'Selector de fecha y hora propio, cómodo en celular',
      'Avisos por WhatsApp con Twilio',
      'Cada usuario ve solo sus tareas',
    ],
    tecnologias: ['React', 'Vite', 'Bootstrap', 'Supabase', 'PostgreSQL', 'Twilio', 'Vercel'],
    imagenes: [],
    enlaces: [
      { texto: 'Probar la demo', url: 'https://tareo-web-roan.vercel.app', tipo: 'demo' },
      { texto: 'Ver código', url: 'https://github.com/ivo99o/tareo', tipo: 'codigo' },
    ],
  },
]
