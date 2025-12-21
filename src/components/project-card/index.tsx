import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import DefaultImage from '@/assets/images/default-image.png';
import Badge from '../badge';
import { ProjectCardProps } from '../../../types';

const ProjectCard = ({
  data,
  onClick,
}: {
  data: ProjectCardProps;
  onClick: () => void;
}) => {
  return (
    <Card
      className="pt-0 cursor-pointer hover:scale-[1.1] transition-all duration-300 h-[24rem]"
      onClick={onClick}
    >
      <div
        className={`w-full h-[40rem] rounded-t-xl flex items-center justify-center relative ${
          data.image ? '' : 'bg-[#F5F5F5] p-2'
        }`}
      >
        <Image
          src={data.image || DefaultImage}
          alt="project-image"
          className={`rounded-t-xl ${data.image ? 'object-cover' : 'w-32'}`}
        />
        <div className="absolute top-2 left-2">
          <Badge label={data.type || ''} />
        </div>
      </div>
      <CardContent className="h-full flex flex-col gap-1 justify-between">
        <div className="space-y-1 ">
          <h6 className="text-sm font-montserrat font-semibold">{data.name}</h6>
          <p className="text-xs font-montserrat line-clamp-3">
            {data.summarize}
          </p>
        </div>
        <div className="flex gap-1 justify-end w-full">
          {data.tech.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.icon}
                alt="tech-icon"
                className="w-6 h-6"
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
