import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  IconBrandMongodb, IconBrandNodejs, IconBrandTailwind,
  IconBrandCss3, IconBrandHtml5, IconBrandJavascript,
  IconBrandGithub, IconBrandReact, IconBrandVite,
  IconBrandTypescript, IconBrandDocker, IconExternalLink,
  IconDeviceMobile, IconServer, IconLayoutDashboard,
} from '@tabler/icons-react';

// React Native icon as SVG (not in tabler)
function IconReactNative({ size = 36, color = '#61DAFB' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" fill={color} stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    </svg>
  );
}

const TECH_STACK = [
  { icon: IconBrandReact,      name: 'React',         color: '#61DAFB' },
  { component: IconReactNative, name: 'React Native', color: '#61DAFB' },
  { icon: IconBrandMongodb,    name: 'MongoDB',        color: '#4EA94B' },
  { icon: IconBrandNodejs,     name: 'Node.js',        color: '#8CC84B' },
  { icon: IconBrandTailwind,   name: 'Tailwind',       color: '#38BDF8' },
  { icon: IconBrandTypescript, name: 'TypeScript',     color: '#3178C6' },
  { icon: IconBrandJavascript, name: 'JavaScript',     color: '#F7E025' },
  { icon: IconBrandHtml5,      name: 'HTML',           color: '#EF6B33' },
  { icon: IconBrandCss3,       name: 'CSS',            color: '#0874BC' },
  { icon: IconBrandVite,       name: 'Vite',           color: '#B14DFE' },
  { icon: IconBrandDocker,     name: 'Docker',         color: '#2496ED' },
  { icon: IconBrandGithub,     name: 'GitHub',         color: '#ffffff' },
];

const TYPE_META = {
  mobile:    { icon: IconDeviceMobile,    label: 'Mobile App',  color: '#08DDFF' },
  backend:   { icon: IconServer,          label: 'Backend API', color: '#06C8E8' },
  frontend:  { icon: IconLayoutDashboard, label: 'Frontend',    color: '#08DDFF' },
  fullstack: { icon: IconBrandReact,      label: 'Fullstack',   color: '#06C8E8' },
};

const PROJECTS = [
  /* ─── React Native / Mobile ─── */
  {
    id: 6,
    title: 'FacilCobro',
    type: 'mobile',
    tech: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Zustand'],
    github: 'https://github.com/AdrianAlexisRD/Facil-Cobro',
    url: '',
    description: 'App móvil de gestión de préstamos y cobranzas. Permite registrar clientes, gestionar cuotas, imprimir recibos vía Bluetooth y visualizar analíticas en tiempo real.',
    highlights: ['Gestión de préstamos y cobradores', 'Impresión Bluetooth de recibos', 'Analíticas y gráficas en tiempo real', 'Geolocalización integrada'],
  },
  {
    id: 7,
    title: 'FacilCobro API',
    type: 'backend',
    tech: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'JWT', 'Twilio'],
    github: 'https://github.com/AdrianAlexisRD/FacilCobro-api',
    url: '',
    description: 'API REST backend para FacilCobro. Gestiona autenticación con roles, préstamos, pagos, clientes y envío de notificaciones SMS con Twilio.',
    highlights: ['Auth JWT multi-rol', 'Notificaciones SMS (Twilio)', 'Tareas programadas (cron)', 'Tests con Jest'],
  },
  {
    id: 8,
    title: 'PocketPos',
    type: 'mobile',
    tech: ['React Native', 'Expo', 'SQLite', 'Zustand', 'React Native Paper'],
    github: 'https://github.com/AdrianAlexisRD/PocketPos',
    url: '',
    description: 'Sistema de punto de venta móvil offline-first para pequeños negocios. Gestiona ventas, inventario, clientes y genera reportes con gráficas.',
    highlights: ['Base de datos local SQLite', 'Gestión de inventario y ventas', 'Reportes y gráficas', 'Funcionalidad de impresión'],
  },
  {
    id: 9,
    title: 'Crese$',
    type: 'mobile',
    tech: ['React Native', 'TypeScript', 'Expo', 'SQLite', 'Zustand'],
    github: 'https://github.com/AdrianAlexisRD/Crese',
    url: '',
    description: 'Tracker de finanzas personales offline-first. Registra ingresos y gastos, gestiona metas de ahorro y muestra estadísticas financieras detalladas.',
    highlights: ['Registro de ingresos y gastos', 'Metas de ahorro', 'Estadísticas financieras', 'Datos 100% locales'],
  },
  /* ─── Web / React ─── */
  {
    id: 10,
    title: 'NewLendVesta',
    type: 'frontend',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Recharts', 'Framer Motion'],
    github: 'https://github.com/AdrianAlexisRD/NewLendVesta',
    url: '',
    description: 'Dashboard empresarial de gestión de préstamos con roles (admin, CEO, supervisor, colaborador), analíticas avanzadas y seguimiento de pagos vencidos.',
    highlights: ['Multi-rol (admin, CEO, supervisor)', 'Dashboard con Recharts', 'Historial de pagos y vencidos', 'Reportes de intereses'],
  },
  {
    id: 11,
    title: 'Sistema Finanzas',
    type: 'backend',
    tech: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/AdrianAlexisRD/Sistema-finanzas',
    url: '',
    description: 'API backend para gestión financiera personal y empresarial. Registra ingresos, gastos, calcula balances, flujo de caja e intereses sobre préstamos.',
    highlights: ['Balance y flujo de caja', 'Cálculo de intereses', 'Auth JWT', 'Arquitectura escalable'],
  },
  /* ─── Proyectos anteriores ─── */
  {
    id: 1,
    title: 'Stock Master',
    type: 'fullstack',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/AdrianAlexisRD/Inventario-MERN',
    url: '',
    description: 'App fullstack para gestión de inventario con CRUD completo, dashboard con autenticación y exportación de reportes en PDF.',
    highlights: ['API REST escalable', 'Base de datos +50 productos', 'Dashboard autenticado', 'Reportes PDF'],
  },
  {
    id: 2,
    title: 'Aquí Restaurante',
    type: 'fullstack',
    tech: ['TypeScript', 'React', 'Firebase', 'MongoDB'],
    github: 'https://github.com/AdrianAlexisRD/Proyecto-aqui-restaurante',
    url: '',
    description: 'Plataforma para restaurantes con menú interactivo, mapa de ubicación y contacto directo vía WhatsApp.',
    highlights: ['Sistema de publicación', 'Menú con imágenes', 'Mapa integrado', '100% responsivo'],
  },
  {
    id: 3,
    title: 'App Weather',
    type: 'frontend',
    tech: ['JavaScript', 'HTML', 'CSS', 'API Fetch'],
    github: 'https://github.com/AdrianAlexisRD/Curso-fullstack-talenting',
    url: 'https://jolly-peony-a4c08a.netlify.app/',
    description: 'Consulta del clima en tiempo real para cualquier ciudad del mundo con geolocalización automática.',
    highlights: ['Búsqueda en tiempo real', 'Manejo de errores', 'localStorage', 'Geolocalización'],
  },
  {
    id: 4,
    title: 'Animemania',
    type: 'frontend',
    tech: ['JavaScript', 'Axios', 'RapidAPI'],
    github: 'https://github.com/AdrianAlexisRD/Inventario-MERN',
    url: '',
    description: 'Plataforma de reseñas de anime con buscador dinámico, rankings mundiales y puntuaciones via RapidAPI.',
    highlights: ['Buscador dinámico', 'Rankings mundiales', 'Interfaz estética', 'API externa'],
  },
  {
    id: 5,
    title: 'To Do List Pro',
    type: 'frontend',
    tech: ['JavaScript', 'LocalStorage', 'CRUD'],
    github: 'https://github.com/AdrianAlexisRD/Curso-fullstack-talenting',
    url: 'https://golden-bubblegum-db0a73.netlify.app/',
    description: 'Gestor de tareas diarias con CRUD completo, persistencia de datos y filtros de estado.',
    highlights: ['CRUD completo', 'Persistencia local', 'Filtros de estado', 'Diseño minimalista'],
  },
];

const FILTERS = ['Todos', 'Mobile', 'Frontend', 'Backend', 'Fullstack'];

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView();
  const meta = TYPE_META[project.type];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col glass rounded-2xl overflow-hidden border border-white/5 hover:border-[#08DDFF]/30 transition-all duration-400"
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#08DDFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Inner glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ boxShadow: 'inset 0 0 40px rgba(8,221,255,0.04)' }} />

      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            {/* Type badge */}
            <span
              className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full w-fit"
              style={{ color: meta.color, background: `${meta.color}12`, border: `1px solid ${meta.color}20` }}
            >
              <meta.icon size={11} />
              {meta.label}
            </span>
            <h3 className="text-lg font-black text-white group-hover:text-[#08DDFF] transition-colors duration-300 mt-1">
              {project.title}
            </h3>
          </div>
          {/* Links */}
          <div className="flex gap-1.5 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass hover:bg-[#08DDFF]/10 hover:text-[#08DDFF] text-white/30 transition-all duration-200"
            >
              <IconBrandGithub size={16} />
            </a>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass hover:bg-[#08DDFF]/10 hover:text-[#08DDFF] text-white/30 transition-all duration-200"
              >
                <IconExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>

        {/* Highlights */}
        <ul className="flex flex-col gap-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-white/55">
              <span className="w-1 h-1 rounded-full bg-[#08DDFF] shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-[10px] font-bold text-[#08DDFF]/80 bg-[#08DDFF]/8 border border-[#08DDFF]/15"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.type === activeFilter.toLowerCase());

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        {/* ── Tech Stack ── */}
        <div ref={ref} className="flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-[#08DDFF]/60 text-xs font-bold tracking-[0.3em] uppercase">Stack</p>
            <h2 className="text-4xl md:text-5xl font-black text-white text-center">Tecnologías</h2>
            <div className="w-16 h-[2px] bg-[#08DDFF]/40 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.2, y: -8 }}
                className="group relative flex flex-col items-center gap-2 cursor-pointer"
              >
                <div className="p-3 rounded-xl glass transition-all duration-300 group-hover:border-[#08DDFF]/20 border border-transparent">
                  {tech.component
                    ? <tech.component size={36} color={tech.color} />
                    : <tech.icon
                        size={36}
                        stroke={1.5}
                        style={{ color: tech.color, filter: `drop-shadow(0 0 8px ${tech.color}40)` }}
                      />
                  }
                </div>
                <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Projects ── */}
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <p className="text-[#08DDFF]/60 text-xs font-bold tracking-[0.3em] uppercase">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-black text-white text-center">Proyectos Destacados</h2>
            <div className="w-16 h-[2px] bg-[#08DDFF]/40 rounded-full" />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActiveFilter(f)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-[#08DDFF] text-[#15153D]'
                    : 'glass text-white/50 hover:text-white border border-white/5 hover:border-[#08DDFF]/20'
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>

          {/* Count */}
          <p className="text-white/25 text-xs -mt-6">
            {filtered.length} proyecto{filtered.length !== 1 ? 's' : ''}
          </p>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
