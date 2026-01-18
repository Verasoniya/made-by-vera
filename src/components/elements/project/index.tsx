'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { projects } from '@/assets/datas/projects';
import ProjectCard from '@/components/project-card';

import Paper3 from '@/assets/svg/paper-3.svg';
import Paper4 from '@/assets/svg/paper-4.svg';
import Paper3Dark from '@/assets/svg/paper-3-dark.svg';
import Paper4Dark from '@/assets/svg/paper-4-dark.svg';
import ModalViewProject from '@/components/modal-view-project';
import useDevice from '@/hooks/use-device';

type ContactElementProps = {
  theme: string;
};

const ProjectElement = ({ theme }: ContactElementProps) => {
  const paper3Image = theme === 'light' ? Paper3 : Paper3Dark;
  const paper4Image = theme === 'light' ? Paper4 : Paper4Dark;
  const [selectedProject, setSelectedProject] = useState([]);
  const [isModalViewProject, setIsModalViewProject] = useState(false);
  const { isMobile, isTablet } = useDevice();

  const handleViewProject = (project: any) => {
    setSelectedProject(project);
    setIsModalViewProject(true);
  };
  return (
    <div
      className={`relative w-full ${
        isMobile || isTablet ? 'h-[80vh]' : 'h-screen'
      }`}
    >
      <Image
        src={paper3Image}
        alt="paper"
        className={`absolute w-auto right-0 hidden xl:block h-screen`}
      />
      <div
        className={`pb-16 pt-24 lg:pt-32 px-4 md:px-16 xl:px-32 w-full flex flex-col justify-center items-start gap-10 ${
          isMobile || isTablet
            ? 'h-[80vh] relative'
            : 'h-screen absolute left-0 top-0'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="text-left font-montserrat text-5xl font-semibold pb-2 border-b-2 border-tertiary w-fit self-start mx-auto md:mx-0">
            Projects
          </h1>
        </motion.div>
        <div className="w-full xl:w-[80vw] h-full flex items-center justify-center self-start">
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Carousel
              opts={{
                align: 'center',
                loop: false,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-[86vw] xl:w-[80vw] space-x-3"
            >
              <CarouselContent
                className={`flex items-center mx-2 ${
                  isMobile || isTablet ? 'h-[80vh]' : 'h-screen'
                }`}
              >
                {projects.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-[94%] md:basis-[60vw] lg:basis-[50%] xl:basis-1/3 px-2 md:px-6 h-fit pb-2"
                  >
                    <ProjectCard
                      data={item}
                      onClick={() => handleViewProject(item)}
                    />
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
        className="h-screen w-auto absolute top-0 right-0 hidden xl:block"
      />
      <ModalViewProject
        open={isModalViewProject}
        onOpenChange={() => {
          setIsModalViewProject(false);
        }}
        data={selectedProject}
      />
    </div>
  );
};

export default ProjectElement;
