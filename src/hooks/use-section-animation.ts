'use client';
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const useSectionAnimation = (id: string, activeHash: string) => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { margin: '-100px' });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (activeHash == `#${id}`) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [activeHash, id]);

  useEffect(() => {
    if (isInView || activeHash === `#${id}`) {
      setShouldAnimate(true);
    }
  }, [isInView, activeHash, id]);
  return { ref, shouldAnimate };
};

export default useSectionAnimation;
