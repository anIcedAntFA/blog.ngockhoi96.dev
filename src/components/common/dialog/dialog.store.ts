import { ReactElement } from 'react';
import { create } from 'zustand';

type DialogStates = {
  dialogs: ReactElement[];
  currentModal?: ReactElement;
};

type DialogActions = {
  showDialog: (newDialog: ReactElement) => void;
  hideDialog: VoidFunction;
  hideAllDialogs: VoidFunction;
};

type DialogStore = DialogStates & {
  actions: DialogActions;
};

const initialState: DialogStates = {
  dialogs: [],
  currentModal: undefined,
};

const useDialogStore = create<DialogStore>()((set) => ({
  ...initialState,
  actions: {
    showDialog: (newDialog) =>
      set((state) => ({
        dialogs: [...state.dialogs, newDialog],
      })),
    hideDialog: () =>
      set((state) => ({
        dialogs: state.dialogs.slice(0, state.dialogs.length - 1),
      })),
    hideAllDialogs: () => set(initialState),
  },
}));

export const useDialogs = () => useDialogStore((state) => state.dialogs);

export const useDialog = () =>
  useDialogStore((state) => state.dialogs[state.dialogs.length - 1]);

export const useDialogActions = () => useDialogStore((state) => state.actions);
