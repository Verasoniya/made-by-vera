import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

type MainTooltipProps = {
  children: React.ReactNode;
  content: string;
};

const MainTooltip = ({ children, content }: MainTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default MainTooltip;
