'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { experiences } from '@/assets/datas/experiences';
import ExperienceList from '@/components/experience-list';
import Watch from '@/assets/svg/watch.svg';
import WatchDark from '@/assets/svg/watch-dark.svg';
import HalfWatch from '@/assets/svg/half-watch.svg';
import useDevice from '@/hooks/use-device';

type ContactElementProps = {
  theme: string;
};

const ExperienceElement = ({ theme }: ContactElementProps) => {
  const { isMobile, isTablet } = useDevice();

  const watchImage = theme === 'light' ? Watch : WatchDark;

  return (
    <div
      className={`relative w-full flex flex-col space-y-2 gap-2 md:space-y-6 py-14 ${
        isMobile || isTablet ? 'h-auto' : 'h-screen'
      }`}
    >
      <h1 className="text-center font-montserrat text-5xl font-semibold px-4 md:px-16 xl:px-32">
        Experiences
      </h1>
      <div className="flex items-center flex-1 gap-2 md:gap-4 xl:gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-2/5 aspect-square hidden xl:block pl-4 md:pl-16 xl:pl-32"
        >
          <Image
            src={watchImage}
            alt="watch"
            className="w-full h-full p-10 object-contain inset-0"
          />
        </motion.div>
        <div className="flex-1 relative h-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute right-0 w-1/2 md:w-auto h-full block xl:hidden top-2/10 md:top-0"
          >
            <Image
              src={HalfWatch}
              alt="watch"
              className="w-auto h-auto md:h-full object-cover inset-0 opacity-25"
            />
          </motion.div>
          <Accordion
            type="single"
            collapsible
            className={`w-full flex flex-col lg:justify-center xl:justify-start justify-start gap-4 relative pl-4 md:pl-16 lg:pl-32 pr-4 md:pr-16 xl:pr-32 py-20 xl:py-0 ${
              isMobile || isTablet ? 'h-full' : 'h-fit'
            }`}
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
  );
};

export default ExperienceElement;
