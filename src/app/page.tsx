'use client';
import { techList } from '@/assets/datas/tech';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Molufei from '@/assets/svg/molufei.svg';
import Paper1 from '@/assets/svg/paper-1.svg';
import Paper2 from '@/assets/svg/paper-2.svg';

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
    </div>
  );
}
