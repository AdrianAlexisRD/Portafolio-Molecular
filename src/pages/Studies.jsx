import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { IconSchool } from '@tabler/icons-react';

const ESTUDIOS = [
  {
    institucion: 'ITLA',
    cursos: ['Diseño de páginas web', 'Fundamentos de programación en Python'],
    accent: '#08DDFF',
  },
  {
    institucion: 'INFOTEP',
    cursos: ['Mantenimiento preventivo de vehículos', 'Auxiliar de contabilidad', 'Manejador de inventario', 'Manejo básico de computadoras'],
    accent: '#06B8D0',
  },
  {
    institucion: 'Aprende',
    cursos: ['Técnico en Redes de Datos', 'Instalador de Fibra Óptica', 'Disciplina en el trabajo'],
    accent: '#08DDFF',
  },
  {
    institucion: 'Talendig',
    cursos: ['Técnico desarrollador Fullstack'],
    accent: '#06B8D0',
  },
  {
    institucion: 'MESCYT',
    cursos: ['Inglés por inmersión'],
    accent: '#08DDFF',
  },
];

export default function Studies() {
  const { ref, inView } = useInView();

  return (
    <section id="studies" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-[#08DDFF]/60 text-xs font-bold tracking-[0.3em] uppercase">Formación</p>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center">Estudios</h2>
          <p className="text-white/40 text-sm">Formación académica y certificaciones</p>
          <div className="w-16 h-[2px] bg-[#08DDFF]/40 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-6">

          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#08DDFF]/30 via-[#08DDFF]/10 to-transparent" />

          {ESTUDIOS.map((estudio, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={estudio.institucion}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className={`
                  relative flex items-start gap-4
                  md:w-[46%] ml-14 md:ml-0
                  ${isLeft ? 'md:self-start md:pr-8' : 'md:self-end md:pl-8'}
                `}
              >
                {/* Dot */}
                <div
                  className={`
                    absolute w-3 h-3 rounded-full ring-4 ring-[#15153D] shrink-0
                    -left-[2.85rem] md:left-auto top-5
                    ${isLeft ? 'md:-right-[1.85rem]' : 'md:-left-[1.85rem]'}
                  `}
                  style={{ background: estudio.accent }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full glass rounded-2xl p-6 border border-white/5 hover:border-[#08DDFF]/20 transition-all duration-300"
                  style={{ boxShadow: `0 0 0 0 ${estudio.accent}00` }}
                >
                  {/* Institution */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ background: `${estudio.accent}15` }}>
                      <IconSchool size={18} style={{ color: estudio.accent }} />
                    </div>
                    <h3
                      className="text-lg font-black tracking-wide"
                      style={{ color: estudio.accent }}
                    >
                      {estudio.institucion}
                    </h3>
                  </div>

                  {/* Courses */}
                  <ul className="flex flex-col gap-2">
                    {estudio.cursos.map((curso) => (
                      <li key={curso} className="flex items-start gap-2.5 text-sm text-white/60">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: estudio.accent }}
                        />
                        {curso}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
