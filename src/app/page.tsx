'use client';

import AnimateSection from '@/components/animate-section';
import ModalOnDev from '@/components/modal-on-dev';
import { useEffect, useState } from 'react';
import ContactElement from '@/components/elements/contact';
import { useTheme } from 'next-themes';
import ItsMeElement from '@/components/elements/itsme';
import ExperienceElement from '@/components/elements/experience';
import ProjectElement from '@/components/elements/project';

export default function Home() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isModalOnDev, setIsModalOnDev] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setIsModalOnDev(true);
    }
  }, [mounted]);

  if (!mounted) {
    return <div className="opacity-0 pointer-events-none"></div>;
  }

  return (
    <div>
      <AnimateSection id="home">
        <ItsMeElement theme={resolvedTheme as string} />
      </AnimateSection>

      <AnimateSection id="experience">
        <ExperienceElement theme={resolvedTheme as string} />
      </AnimateSection>

      <AnimateSection id="projects">
        <ProjectElement theme={resolvedTheme as string} />
      </AnimateSection>

      <AnimateSection id="contact">
        <ContactElement theme={resolvedTheme as string} />
      </AnimateSection>

      <div className="bg-purple-black h-32 md:h-20 w-full flex items-start md:items-center justify-center px-2 py-5">
        <h6 className="text-white">&copy; 2025 Vera Soniya</h6>
      </div>

      {/* <ModalOnDev
        open={isModalOnDev}
        onOpenChange={() => setIsModalOnDev(false)}
        onNext={() => setIsModalOnDev(false)}
      /> */}
    </div>
  );
}
