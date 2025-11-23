'use client';
import { motion } from 'framer-motion';
import { useActiveHashStore } from '@/store/use-active-hash-store';
import React from 'react';
import useSectionAnimation from '@/hooks/use-section-animation';

type AnimationSectionProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};
const AnimateSection = ({ children, id, className }: AnimationSectionProps) => {
  const activeHash = useActiveHashStore((sec) => sec.activeHash);
  const { ref, shouldAnimate } = useSectionAnimation(id, activeHash);

  return (
    <section ref={ref} id={id} className={className}>
      <motion.div
        key={shouldAnimate ? 'animate' : 'reset'}
        initial={{ opacity: 0, y: 50 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimateSection;
