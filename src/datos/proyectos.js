export const PROYECTOS = [
  {
    id: 'crm-taller',
    etiqueta: 'Sistema de gestión',
    titulo: 'CRM para taller de vehículos',
    descripcion:
      'Sistema para administrar un taller: clientes, vehículos, mecánicos e historial. Cada cliente recibe un código para seguir su vehículo: estado, mecánico a cargo, fotos, fecha y hora de cada actualización y un mensaje explicativo. Incluye los presupuestos y facturas en PDF.',
    tecnologias: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
    imagenes: [],
    nota: 'Sistema privado: mirá las capturas.',
    enlaces: [{ texto: 'Ver código', url: 'https://github.com/ivo99o/CRM-taller', tipo: 'codigo' }],
  },
  {
    id: 'tareo',
    etiqueta: 'Demo en vivo',
    titulo: 'Tareo',
    descripcion:
      'Gestor de tareas con avisos. Organizá tus tareas con categorías y fechas límite, y recibí un aviso por WhatsApp cuando una esté por vencer. Podés crear una cuenta y probarlo ahora.',
    tecnologias: ['React', 'Vite', 'Bootstrap', 'Supabase', 'PostgreSQL', 'Twilio', 'Vercel'],
    imagenes: [],
    enlaces: [
      { texto: 'Probar la demo', url: 'https://tareo-web-roan.vercel.app', tipo: 'demo' },
      { texto: 'Ver código', url: 'https://github.com/ivo99o/tareo', tipo: 'codigo' },
    ],
  },
]
