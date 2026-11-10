export const PROYECTOS = [
  {
    id: 'crm-taller',
    etiqueta: 'Sistema de gestión',
    titulo: 'CRM para taller de vehículos',
    descripcion:
      'Sistema completo para administrar un taller: clientes, vehículos, mecánicos, historial de trabajos y facturación. Incluye un panel de administración y un panel para que cada cliente consulte lo suyo.',
    puntos: [
      'Panel de administración con tablero, clientes, vehículos, mecánicos e historial',
      'Facturas descargables en PDF',
      'Panel de cliente con acceso propio',
      'Envío de avisos por WhatsApp',
    ],
    tecnologias: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    imagenes: [],
    enlaces: [{ texto: 'Ver código', url: 'https://github.com/ivo99o/CRM-taller', tipo: 'codigo' }],
    nota: 'Por ser un sistema completo, no está abierto al público. Mirá las capturas.',
  },
  {
    id: 'tareo',
    etiqueta: 'Demo en vivo',
    titulo: 'tareo, gestor de tareas',
    descripcion:
      'Organizador de tareas con categorías, fechas límite y estados que cambian según el tiempo que falta. Avisa por WhatsApp cuando una tarea está por vencer. Podés crear una cuenta y probarlo ahora mismo.',
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
