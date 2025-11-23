'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Watch from '@/assets/svg/watch.svg';
import WatchDark from '@/assets/svg/watch-dark.svg';
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

export default function Home() {
  const { resolvedTheme } = useTheme();

  const watchImage = resolvedTheme === 'light' ? Watch : WatchDark;
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
        <div className="relative w-full h-screen flex flex-col space-y-2 md:space-y-6 py-14 px-4 md:px-16 lg:px-32">
          <h1 className="text-center font-montserrat text-5xl font-semibold">
            Experiences
          </h1>
          <div className="flex items-center flex-1 gap-2 md:gap-4 lg:gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-2/5 aspect-square hidden lg:block"
            >
              <Image
                src={watchImage}
                alt="watch"
                className="w-full h-full p-10 object-contain inset-0"
              />
            </motion.div>
            <div className="flex-1">
              <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col justify-start gap-4 h-full"
                defaultValue="0"
              >
                {experiences.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.5 }}
                    viewport={{ once: true }}
                    className="border-b border-tertiary/50 dark:border-tertiary/10 px-4"
                  >
                    <AccordionItem value={`${item.id}`}>
                      <AccordionTrigger className="w-full cursor-pointer pb-2 hover:no-underline hover:scale-[1.02]">
                        <ExperienceList
                          key={index}
                          periode={item.periode}
                          role={item.role}
                          office={item.office}
                        />
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance py-2 w-full">
                        <div className="w-full text-sm">{item.description}</div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
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
