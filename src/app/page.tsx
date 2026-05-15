'use client';

import AnimateSection from '@/components/animate-section';
import ModalOnDev from '@/components/modal-on-dev';
import { useEffect, useState } from 'react';
import ContactElement from '@/components/elements/contact';
import { useTheme } from 'next-themes';
import ItsMeElement from '@/components/elements/itsme';
import ExperienceElement from '@/components/elements/experience';
import ProjectElement from '@/components/elements/project';
import { fetchProjects } from '@/hooks/use-projects';
import { formatProjectsData } from '@/utils/formattedProjects';
import { toast } from 'sonner';

export default function Home() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [isModalOnDev, setIsModalOnDev] = useState(false);
  const [projects, setProjects] = useState([]);

  const getProjectsList = async () => {
    try {
      const data = await fetchProjects();
      const formatted = formatProjectsData(data);
      setProjects(formatted as any);
    } catch (err) {
      console.log(`Project List Error: ${err}`);
      toast.error('Error!', {
        description: 'Project List Error: Something went wrong.',
      });
    }
  };

  useEffect(() => {
    getProjectsList();
  }, []);

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
        <ProjectElement theme={resolvedTheme as string} projects={projects} />
      </AnimateSection>

      <AnimateSection id="contact">
        <ContactElement theme={resolvedTheme as string} />
      </AnimateSection>

      {/* <ModalOnDev
        open={isModalOnDev}
        onOpenChange={() => setIsModalOnDev(false)}
        onNext={() => setIsModalOnDev(false)}
      /> */}
    </div>
  );
}
