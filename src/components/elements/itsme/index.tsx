'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { techList } from '@/assets/datas/tech';
import Paper1 from '@/assets/svg/paper-1.svg';
import Paper1Mb from '@/assets/svg/paper-1-mb.svg';
import Paper2 from '@/assets/svg/paper-2.svg';
import Paper2Dark from '@/assets/svg/paper-2-dark.svg';
import Paper2MbDark from '@/assets/svg/paper-2-mb-dark.svg';
import Molufei from '@/assets/svg/molufei.svg';
import MolufeiDark from '@/assets/svg/molufei-dark.svg';
import PinkMolufei from '@/assets/svg/pink-molufei.svg';
import Image from 'next/image';
import MainTooltip from '@/components/main-tooltip';
import useDevice from '@/hooks/use-device';
import Paper5 from '@/assets/svg/paper-5.svg';
import Paper5Dark from '@/assets/svg/paper-5-dark.svg';

type ContactElementProps = {
  theme: string;
};
const ItsMeElement = ({ theme }: ContactElementProps) => {
  const { isMobile, isTablet } = useDevice();
  const paper5Image = theme === 'light' ? Paper5 : Paper5Dark;
  const images =
    theme === 'light'
      ? [Paper1, Paper2]
      : isMobile || isTablet
      ? [Paper1Mb, Paper2MbDark]
      : [Paper1, Paper2Dark];
  const molufeiImage =
    theme === 'light'
      ? isMobile || isTablet
        ? PinkMolufei
        : Molufei
      : isMobile || isTablet
      ? PinkMolufei
      : MolufeiDark;
  return (
    <div className="relative w-full">
      {isMobile || isTablet ? null : (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={molufeiImage}
            alt="molufei"
            className="w-full h-screen object-cover object-center"
          />
        </motion.div>
      )}
      {isMobile || isTablet
        ? null
        : images.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 1.4, x: 1.4, scale: 1.4 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.6 }}
              className="w-full absolute top-0"
            >
              <Image
                src={paper}
                alt="paper"
                className="w-full h-screen object-cover object-center"
              />
            </motion.div>
          ))}
      <div
        style={{
          backgroundImage:
            isMobile || isTablet ? `url(${paper5Image.src})` : 'none',
          opacity: isMobile || isTablet ? 0.8 : 0,
        }}
        className={`w-full bottom-0 md:top-0 flex flex-col md:flex-row justify-center xl:justify-end items-center h-full px-5 md:px-16 xl:px-32 ${
          isMobile || isTablet ? 'relative py-20' : 'absolute'
        }`}
      >
        {/* {isMobile || isTablet ? (
          <motion.div
            initial={{ opacity: 0, y: 1.4, x: 1.4, scale: 1.4 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full top-0 z-10"
          >
            <Image
              src={paper5Image}
              alt="paper"
              className={`w-full object-cover h-[60vh]`}
            />
          </motion.div>
        ) : null} */}
        {isMobile || isTablet ? (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={molufeiImage}
              alt="molufei"
              className="w-full h-[20vh] lg:h-[40vh] object-cover object-center"
            />
          </motion.div>
        ) : null}
        <div className={`space-y-4`}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              // delay: isMobile || isTablet ? 0.1 : 1.6,
            }}
            className="space-y-2 md:space-y-4"
          >
            <h3 className="text-4xl xl:text-5xl text-center md:text-start">
              Hi
            </h3>
            <h3 className="text-5xl xl:text-7xl font-montserrat font-semibold">
              I&lsquo;ts{' '}
              <span className="text-secondary font-montserrat">
                Vera Soniya
              </span>
            </h3>
          </motion.div>

          <div className="flex gap-2 md:gap-4 xl:gap-6 justify-center md:justify-end">
            {techList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  // delay: isMobile || isTablet ? 0.1 : 1.6,
                }}
              >
                <MainTooltip key={index} content={item.label}>
                  <Image
                    src={item.icon}
                    alt={item.label}
                    className="hover:scale-[1.04] w-10 xl:w-20 h-10 xl:h-20 "
                  />
                </MainTooltip>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItsMeElement;
