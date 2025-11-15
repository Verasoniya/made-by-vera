import { create } from 'zustand';

interface ActiveHashState {
  activeHash: string;
  setActiveHash: (hash: string) => void;
}

export const useActiveHashStore = create<ActiveHashState>((set) => ({
  activeHash: '',
  setActiveHash: (hash) => set({ activeHash: hash }),
}));
