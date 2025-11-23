'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Paper3 from '@/assets/svg/paper-3.svg';
import Paper4 from '@/assets/svg/paper-4.svg';
import Paper3Dark from '@/assets/svg/paper-3-dark.svg';
import Paper4Dark from '@/assets/svg/paper-4-dark.svg';
import ExperienceList from '@/components/experience-list';
import { experiences } from '@/assets/datas/experiences';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AnimateSection from '@/components/animate-section';
import ModalOnDev from '@/components/modal-on-dev';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { projects } from '@/assets/datas/projects';
import Autoplay from 'embla-carousel-autoplay';
import ProjectCard from '@/components/project-card';
import MainTooltip from '@/components/main-tooltip';
import ContactElement from '@/components/elements/contact';
import { useTheme } from 'next-themes';
import ItsMeElement from '@/components/elements/itsme';
import ExperienceElement from '@/components/elements/experience';

export default function Home() {
  const { resolvedTheme } = useTheme();

  const paper3Image = resolvedTheme === 'light' ? Paper3 : Paper3Dark;
  const paper4Image = resolvedTheme === 'light' ? Paper4 : Paper4Dark;
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
        <div className="relative w-full h-screen">
          <Image
            src={paper3Image}
            alt="paper"
            className="absolute h-screen w-auto right-0 hidden md:block"
          />
          <div className="absolute left-0 h-screen top-0 pb-16 pt-32 px-4 md:px-16 lg:px-32 w-full flex flex-col justify-center items-start">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-left font-montserrat text-5xl font-semibold pb-2 border-b-2 border-tertiary w-fit self-start">
                Projects
              </h1>
            </motion.div>
            <div className="w-full md:w-[80vw] h-full flex items-center justify-center self-start">
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Carousel
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                  className="w-[90vw] md:w-[80vw] space-x-3"
                >
                  <CarouselContent className="h-screen flex justify-center items-center">
                    {projects.map((item, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-full md:basis-1/2 lg:basis-1/3 px-2 md:px-6"
                      >
                        <ProjectCard data={item} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </motion.div>
            </div>
          </div>
          <Image
            src={paper4Image}
            alt="paper"
            className="h-screen w-auto absolute top-0 right-0 hidden md:block"
          />
        </div>
      </AnimateSection>

      <AnimateSection id="projects">
        <ContactElement theme={resolvedTheme as string} />
      </AnimateSection>

      <div className="bg-purple-black h-20 w-full flex items-center justify-center">
        <h6 className="text-white">&copy; 2025 Vera Soniya</h6>
      </div>

      <ModalOnDev
        open={isModalOnDev}
        onOpenChange={() => setIsModalOnDev(false)}
        onNext={() => setIsModalOnDev(false)}
      />
    </div>
  );
}
