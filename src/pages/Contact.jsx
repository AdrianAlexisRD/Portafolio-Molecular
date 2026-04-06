import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconMail,
  IconArrowUpRight,
} from '@tabler/icons-react';

const LINKS = [
  {
    href: 'https://www.linkedin.com/in/adri%C3%A1n-a-lopez-santos-669ba4333',
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
    sub: 'Adrian A. Lopez Santos',
    color: '#0077B5',
  },
  {
    href: 'https://github.com/AdrianAlexisRD',
    icon: IconBrandGithub,
    label: 'GitHub',
    sub: '@AdrianAlexisRD',
    color: '#ffffff',
  },
  {
    href: 'https://wa.me/18092322812',
    icon: IconBrandWhatsapp,
    label: 'WhatsApp',
    sub: '+1 (809) 232-2812',
    color: '#25D366',
  },
  {
    href: 'mailto:Alexaghm411@gmail.com',
    icon: IconMail,
    label: 'Gmail',
    sub: 'Alexaghm411@gmail.com',
    color: '#EA4335',
  },
];

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <p className="text-[#08DDFF]/60 text-xs font-bold tracking-[0.3em] uppercase">Hablemos</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Contáctame</h2>
          <p className="text-white/45 text-sm max-w-sm leading-relaxed">
            ¿Tienes un proyecto en mente? Estoy disponible para freelance y oportunidades laborales.
          </p>
          <div className="w-16 h-[2px] bg-[#08DDFF]/40 rounded-full" />
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group glass rounded-2xl p-5 border border-white/5 hover:border-[#08DDFF]/25 transition-all duration-300 flex items-center gap-4 relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at 20% 50%, ${link.color}08, transparent 60%)` }}
              />

              {/* Icon */}
              <div
                className="p-3 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${link.color}12`, border: `1px solid ${link.color}20` }}
              >
                <link.icon size={24} style={{ color: link.color }} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-black text-white group-hover:text-[#08DDFF] transition-colors duration-300 text-sm">
                  {link.label}
                </span>
                <span className="text-white/40 text-xs truncate">{link.sub}</span>
              </div>

              {/* Arrow */}
              <IconArrowUpRight
                size={16}
                className="ml-auto text-white/20 group-hover:text-[#08DDFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
              />
            </motion.a>
          ))}
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <p className="text-white/30 text-sm">O envíame un correo directamente</p>
          <motion.a
            href="mailto:Alexaghm411@gmail.com?subject=Hola Adrian&body=Quiero contactarte"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(8,221,255,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-xl bg-[#08DDFF] text-[#15153D] font-black text-sm tracking-wide transition-all duration-300"
          >
            Enviar Mensaje
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
