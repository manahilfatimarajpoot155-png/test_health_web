import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface HoverCard3DProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function HoverCard3D({ icon, title, description }: HoverCard3DProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="relative p-8 rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden"
        whileHover={{
          boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
        }}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.div
          className="relative z-10 mb-4 text-blue-600"
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1,
          }}
          transition={{
            rotate: {
              duration: 0.5,
            },
            scale: {
              duration: 0.2,
            },
          }}
        >
          {icon}
        </motion.div>
        
        <h3 className="relative z-10 text-xl mb-3 text-slate-900">{title}</h3>
        <p className="relative z-10 text-slate-700 leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
}
