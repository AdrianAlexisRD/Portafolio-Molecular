import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';

function HeroOrb() {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={mesh}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#08DDFF"
          transparent
          opacity={0.12}
          distort={0.4}
          speed={2}
          wireframe
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.95, 64, 64]} />
        <MeshDistortMaterial
          color="#08DDFF"
          transparent
          opacity={0.06}
          distort={0.3}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function HeroRings() {
  const g = useRef();
  useFrame((state) => {
    if (g.current) {
      g.current.rotation.x = state.clock.elapsedTime * 0.1;
      g.current.rotation.z = state.clock.elapsedTime * 0.08;
    }
  });
  return (
    <group ref={g}>
      <Torus args={[1.6, 0.01, 16, 100]}>
        <meshBasicMaterial color="#08DDFF" transparent opacity={0.3} />
      </Torus>
      <Torus args={[2.2, 0.006, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
        <meshBasicMaterial color="#08DDFF" transparent opacity={0.15} />
      </Torus>
    </group>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 z-10"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cyan text-[#08DDFF] text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#08DDFF] animate-pulse" />
              Disponible para proyectos
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <p className="text-white/40 text-sm font-semibold tracking-[0.25em] uppercase mb-2">
              Portafolio · 2025
            </p>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
              <span className="block text-white">Adrian</span>
              <span className="block text-gradient-cyan">Alexis</span>
              <span className="block text-white/80">Lopez</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="w-12 h-px bg-[#08DDFF]" />
            <span className="text-[#08DDFF] font-bold tracking-[0.2em] uppercase text-sm">
              Fullstack Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-white/55 text-base md:text-lg leading-relaxed max-w-lg"
          >
            Desarrollador{' '}
            <span className="text-white font-semibold">fullstack autodidacta</span>{' '}
            apasionado por resolver problemas complejos y convertir ideas en
            experiencias digitales fluidas. Enfocado en entregar código de{' '}
            <span className="text-[#08DDFF] font-semibold">alta calidad</span>.
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            {[
              { value: '5+', label: 'Proyectos' },
              { value: '2+', label: 'Años aprendiendo' },
              { value: '100%', label: 'Autodidacta' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center px-5 py-3 rounded-2xl glass-cyan hover:scale-105 transition-transform duration-300"
              >
                <span className="text-2xl font-black text-[#08DDFF]">{value}</span>
                <span className="text-xs text-white/50 font-medium mt-0.5">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(8,221,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-xl bg-[#08DDFF] text-[#15153D] font-black text-sm transition-all duration-300"
            >
              Ver Proyectos
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-xl glass border border-[#08DDFF]/20 text-white font-bold text-sm hover:border-[#08DDFF]/50 hover:bg-[#08DDFF]/5 transition-all duration-300"
            >
              Contáctame
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 3D Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="relative h-[400px] lg:h-[500px] z-10"
        >
          {/* Glow behind canvas */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-[#08DDFF]/8 blur-[80px] animate-pulse" />
          </div>
          <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
            <ambientLight intensity={1} />
            <pointLight position={[5, 5, 5]} intensity={2} color="#08DDFF" />
            <pointLight position={[-5, -5, -5]} intensity={0.5} color="#15153D" />
            <HeroOrb />
            <HeroRings />
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#08DDFF]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
