import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';

type MainModalProps = {
  open: boolean;
  closable?: boolean;
  classModal?: string;
  onOpenChange?: (value: boolean) => void;
  children: React.ReactNode;
};

const MainModal = ({
  open,
  closable = true,
  classModal,
  onOpenChange,
  children,
}: MainModalProps) => {
  const handleClose = (value: boolean) => {
    if (closable) {
      onOpenChange?.(value);
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={`${classModal} !min-w-fit`}
        onInteractOutside={(event) => {
          const target = event.target as HTMLElement;
          if (target?.closest('[data-sonner-toaster')) {
            event.preventDefault();
          }
        }}
        showCloseButton={closable ? true : false}
      >
        <DialogTitle className="hidden"></DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default MainModal;
