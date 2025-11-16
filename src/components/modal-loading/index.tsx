import React from 'react';
import MainModal from '../main-modal';
import MolufeiLogo from '@/assets/svg/molufei-logo.svg';
import Image from 'next/image';

type ModalLoadingProps = {
  open: boolean;
  onOpenChange: () => void;
  label: string;
};

const ModalLoading = ({ open, onOpenChange, label }: ModalLoadingProps) => {
  return (
    <MainModal
      open={open}
      classModal="!w-fit p-10"
      closable={false}
      onOpenChange={onOpenChange}
    >
      <div className="relative w-28 h-28">
        <div className="absolute w-28 h-28 border-l-4 border-t-4 border-secondary rounded-full animate-spin" />

        <Image
          src={MolufeiLogo}
          alt="mofei"
          className="absolute top-5 left-4 w-18 h-18 -rotate-45"
        />
      </div>
      <h6 className="text-center text-sm">{label}</h6>
    </MainModal>
  );
};

export default ModalLoading;
