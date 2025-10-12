'use client';
import { techList } from '@/assets/datas/tech';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Molufei from '@/assets/svg/molufei.svg';
import Paper1 from '@/assets/svg/paper-1.svg';
import Paper2 from '@/assets/svg/paper-2.svg';
import Watch from '@/assets/svg/watch.svg';
import HalfCircleBorder from '@/assets/svg/half-circle-border.svg';
import ExperienceList from '@/components/experience-list';
import { experiences } from '@/assets/datas/experiences';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  const images = [Paper1, Paper2];

  return (
    <div>
      <div id="home">
        <div className="relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={Molufei} alt="molufei" className="w-full" />
          </motion.div>
          {images.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 1.4, x: 1.4, scale: 1.4 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.8 }}
              className="w-full absolute top-0"
            >
              <Image src={paper} alt="paper" className="w-full" />
            </motion.div>
          ))}
          <div className="w-full absolute top-0 flex justify-end items-center h-full px-32">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="space-y-4"
            >
              <h3 className="text-5xl">Hi</h3>
              <h3 className="text-7xl font-montserrat font-semibold">
                It's{' '}
                <span className="text-secondary font-montserrat">
                  Vera Soniya
                </span>
              </h3>
              <div className="flex gap-6 justify-end">
                {techList.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-1"
                  >
                    <Image
                      src={item.icon}
                      alt="next-js"
                      className="text-tertiary"
                      width={40}
                      height={40}
                    />
                    <p className="text-xs text-center">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div id="experience">
        <div className="relative w-full h-screen flex flex-col space-y-14 py-14 px-32">
          <h1 className="text-center font-montserrat text-5xl font-semibold">
            Experiences
          </h1>
          <div className="flex items-center flex-1">
            <div className="relative py-8">
              <div className="relative w-2/3 aspect-square">
                <Image
                  src={Watch}
                  alt="watch"
                  className="w-full h-full p-10 object-contain inset-0"
                />

                <motion.div
                  initial={{
                    background: 'conic-gradient(transparent 0deg, #fff 0deg)',
                  }}
                  animate={{
                    background:
                      'conic-gradient(transparent 360deg, #fff 361deg)',
                  }}
                  transition={{
                    duration: 3,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    maskImage:
                      'radial-gradient(circle, white 80%, transparent 100%)',
                    WebkitMaskImage:
                      'radial-gradient(circle, white 80%, transparent 100%)',
                  }}
                />
              </div>
              <div className="absolute h-full top-0 -z-10">
                <div className="relative h-full aspect-square flex items-end justify-end">
                  <Image
                    src={HalfCircleBorder}
                    alt="border"
                    className="h-full self-end w-fit p-6"
                  />
                  <div className="bg-secondary h-5 w-5 rounded-full absolute top-1/2 right-4" />
                  <div className="bg-secondary h-5 w-5 rounded-full absolute top-1/6 right-[16%]" />
                  <div className="bg-secondary h-5 w-5 rounded-full absolute bottom-1/6 right-[16%]" />
                  <motion.div
                    initial={{
                      background: 'conic-gradient(transparent 0deg, #fff 0deg)',
                    }}
                    animate={{
                      background:
                        'conic-gradient(transparent 360deg, #fff 361deg)',
                    }}
                    transition={{
                      duration: 3,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 rounded-full p-10"
                    style={{
                      maskImage:
                        'radial-gradient(circle, white 80%, transparent 100%)',
                      WebkitMaskImage:
                        'radial-gradient(circle, white 80%, transparent 100%)',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="h-full flex-1">
              <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col justify-between gap-4 h-full py-16"
                defaultValue="0"
              >
                {experiences.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.5 }}
                    viewport={{ once: true }}
                    className="border-b border-tertiary/70 px-4"
                  >
                    <AccordionItem value={`${item.id}`}>
                      <AccordionTrigger className="w-full cursor-pointer pb-2">
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
      </div>
    </div>
  );
}
