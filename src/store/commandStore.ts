import { create } from "zustand"

interface CommandStore {
  open: boolean
  setOpen: (value: boolean) => void
  toggle: () => void
}

export const useCommandStore = create<CommandStore>((set) => ({
  open: false,
  setOpen: (value) => set({ open: value }),
  toggle: () => set((state) => ({ open: !state.open })),
}))
