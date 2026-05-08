'use client';
import React from 'react';
import MainModal from '../main-modal';
import Image from 'next/image';
import DefaultImage from '@/assets/images/default-image.png';
import Badge from '../badge';
import { Button } from '../ui/button';
import MainTooltip from '../main-tooltip';

type ModalViewProjectProps = {
  open: boolean;
  onOpenChange: () => void;
  data: any;
};

const ModalViewProject = ({
  open,
  onOpenChange,
  data,
}: ModalViewProjectProps) => {
  return (
    <MainModal open={open} onOpenChange={onOpenChange} classModal="!w-fit ">
      <div className="space-y-4 md:space-y-6 max-h-[80vh] w-[80vw] xl:w-[40vw] max-w-[80vw] overflow-y-scroll font-family-poppins">
        <div>
          <div className="flex gap-2 items-center">
            <h6 className="font-semibold text-sm md:text-base xl:text-xl">
              {data.name}
            </h6>
            <Badge label="Work Project" />
          </div>
          <h6 className="text-xs text-secondary font-medium">
            {data.time} | {data.role}
          </h6>
        </div>
        <div className="flex flex-col items-start w-full gap-4">
          <div
            className={`w-full rounded-lg  relative ${
              data.image ? '' : 'border border-secondary/30'
            }`}
          >
            <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-100">
              <Image
                src={data.image || DefaultImage}
                alt={`image-${data.name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`w-full h-52 self-center rounded-lg ${
                  data.image ? 'object-cover p-0' : 'object-contain p-2'
                }`}
              />
            </div>
            {data.url && (
              <Button
                variant={'secondary'}
                size={'sm'}
                className="text-primary-foreground rounded-full cursor-pointer absolute bottom-2 right-2"
              >
                See Project
              </Button>
            )}
          </div>
          <div className="flex items-center gap-4">
            <h6 className="text-neutral-500 dark:text-neutral-50 text-xs flex-1">
              {data.summarize}
            </h6>
            <div className="max-w-1/3">
              <h6 className="text-xs font-medium">Tech Stack:</h6>
              <div className="ml-auto rounded-md flex items-center justify-start px-3 py-2 gap-2 border-2 overflow-x-auto">
                {data.tech?.map((item: any, id: number) => {
                  return (
                    <MainTooltip key={id} content={item.label}>
                      <Image
                        src={item.icon}
                        alt="tech-icon"
                        className="w-6 h-6"
                      />
                    </MainTooltip>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <h6 className="text-base font-bold  text-tertiary">What I do:</h6>
            <ul className="list-disc pl-5">
              {data.jobdesc?.map((job: any, id: number) => (
                <li
                  key={id}
                  className="text-sm  text-neutral-600 dark:text-neutral-50 linet"
                >
                  {job.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default ModalViewProject;
