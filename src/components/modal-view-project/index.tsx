'use client';
import React from 'react';
import MainModal from '../main-modal';
import Image from 'next/image';
import DefaultImage from '@/assets/images/default-image.png';
import Badge from '../badge';
import { Button } from '../ui/button';

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
    <MainModal open={open} onOpenChange={onOpenChange} classModal="!w-fit">
      <div className="space-y-4 md:space-y-6 max-h-[80vh] w-[80vw] md:w-[40vw] max-w-[80vw] overflow-y-scroll font-family-poppins">
        <div>
          <div className="flex gap-2 items-center">
            <h6 className="font-semibold text-sm md:text-base lg:text-xl">
              {data.name}
            </h6>
            <Badge label="Work Project" />
          </div>
          <h6 className="text-xs text-primary font-medium">
            {data.time} | {data.role}
          </h6>
        </div>
        <div className="flex flex-col items-start w-full gap-4">
          <div
            className={`w-full rounded-lg  relative ${
              data.image ? '' : 'border border-secondary/30'
            }`}
          >
            <Image
              src={data.image || DefaultImage}
              alt="image-project"
              className={`w-full h-52 self-center rounded-lg ${
                data.image ? 'object-cover p-0' : 'object-contain p-2'
              }`}
            />
            <div className="absolute bottom-1 right-1 bg-white/80 rounded-lg flex items-center justify-center px-2 py-1 gap-2">
              {data.tech?.map((item: any, id: number) => {
                return (
                  <Image
                    key={id}
                    src={item.icon}
                    alt="tech-icon"
                    className="w-6 h-6"
                  />
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h6 className="text-neutral-500 text-xs ">{data.summarize}</h6>
            {data.url && (
              <Button
                variant={'secondary'}
                size={'sm'}
                className="text-primary-foreground rounded-full cursor-pointer"
              >
                See Project
              </Button>
            )}
          </div>
          <div>
            <h6 className="text-base font-bold  text-tertiary">What I do:</h6>
            <ul className="list-disc pl-5">
              {data.jobdesc?.map((job: any, id: number) => (
                <li key={id} className="text-sm  text-neutral-600 linet">
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
