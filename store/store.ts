import { create } from 'zustand';

interface AppState {
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (open: boolean) => void;

  isRenameModalOpen: boolean;
  setIsRenameModalOpen: (open: boolean) => void;

  fileId: string | null;
  setFileId: (fileId: string) => void;

  filename: string;
  setFilename: (filename: string) => void;
}

export const useAppStore = create<AppState>()((set) => ({
  isDeleteModalOpen: false,
  setIsDeleteModalOpen: (open: boolean) => set((state) => ({ isDeleteModalOpen: open })),

  isRenameModalOpen: false,
  setIsRenameModalOpen: (open: boolean) => set((state) => ({ isRenameModalOpen: open })),

  fileId: null,
  setFileId: (fileId: string) => set((state) => ({ fileId })),

  filename: "",
  setFilename: (filename: string) => set((state) => ({ filename })),
}));