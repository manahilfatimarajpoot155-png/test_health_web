import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  offset?: number;
}

export function ParallaxSection({ children, backgroundImage, offset = 100 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div ref={ref} className="relative overflow-hidden min-h-[400px]">
      {backgroundImage && (
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 -z-10 will-change-transform"
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/80" />
        </motion.div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
