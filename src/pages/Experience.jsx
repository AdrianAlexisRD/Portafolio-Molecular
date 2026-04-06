import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { IconBriefcase } from '@tabler/icons-react';

const EXPERIENCIAS = [
  {
    empresa: 'Ingmelec',
    cargo: 'Técnico Electricista',
    descripcion: 'Instalación y mantenimiento de sistemas eléctricos de media y baja tensión.',
    accent: '#08DDFF',
  },
  {
    empresa: 'Voz & ADSL',
    cargo: 'Técnico en Telecomunicaciones',
    descripcion: 'Reparación y mantenimiento de servicios de telefonía ADSL y Voz.',
    accent: '#06C8E8',
  },
  {
    empresa: 'Nerdot',
    cargo: 'Técnico en Logística Digital',
    descripcion: 'Servicios técnicos de software en terminales de tarjetas bancarias.',
    accent: '#08DDFF',
  },
  {
    empresa: 'OceanWorld',
    cargo: 'Técnico Electricista Industrial',
    descripcion: 'Mantenimiento eléctrico industrial en planta de gran escala.',
    accent: '#06C8E8',
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-[#08DDFF]/60 text-xs font-bold tracking-[0.3em] uppercase">Trayectoria</p>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center">
            Experiencia Laboral
          </h2>
          <div className="w-16 h-[2px] bg-[#08DDFF]/40 rounded-full" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {EXPERIENCIAS.map((exp, i) => (
            <motion.div
              key={exp.empresa}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group glass rounded-2xl p-6 border border-white/5 hover:border-[#08DDFF]/25 transition-all duration-400 relative overflow-hidden"
            >
              {/* Accent top line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${exp.accent}, transparent)` }}
              />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="p-3 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${exp.accent}15`, border: `1px solid ${exp.accent}25` }}
                >
                  <IconBriefcase size={22} style={{ color: exp.accent }} />
                </div>

                <div className="flex flex-col gap-1.5 min-w-0">
                  <span
                    className="text-[10px] font-black tracking-widest uppercase"
                    style={{ color: `${exp.accent}80` }}
                  >
                    {exp.empresa}
                  </span>
                  <h3 className="text-white font-black text-lg leading-tight group-hover:text-[#08DDFF] transition-colors duration-300">
                    {exp.cargo}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{exp.descripcion}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
