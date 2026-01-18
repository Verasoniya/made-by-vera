'use client';
import { useEffect, useState } from 'react';

export default function useDevice() {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>(
    'desktop'
  );

  const updateDevice = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setDevice('mobile');
    } else if (width < 1280) {
      setDevice('tablet');
    } else {
      setDevice('desktop');
    }
  };

  useEffect(() => {
    updateDevice();
    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return {
    device,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
  };
}
