import React from 'react';
import MainModal from '../main-modal';
import { Construction } from 'lucide-react';
import { Button } from '../ui/button';
type ModalUploadFileProps = {
  open: boolean;
  onOpenChange: () => void;
  onNext: () => void;
};

const ModalOnDev = ({ open, onOpenChange, onNext }: ModalUploadFileProps) => {
  return (
    <MainModal
      open={open}
      closable={true}
      onOpenChange={onOpenChange}
      classModal="!w-fit p-10"
    >
      <div className="flex flex-col justify-center items-center gap-4 border border-secondary/60 rounded-lg border-dashed p-4">
        <Construction className="w-20 h-20 text-secondary" />
        <h6 className="text-center text-sm font-medium">
          Hi! The site’s under construction… bugs included, but don’t stop
          exploring!
        </h6>
        <Button
          variant={'default'}
          className="w-full cursor-pointer"
          onClick={onNext}
        >
          Next !
        </Button>
      </div>
    </MainModal>
  );
};

export default ModalOnDev;
