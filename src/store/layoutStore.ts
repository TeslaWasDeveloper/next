import { create } from "zustand"
import { persist } from "zustand/middleware"

interface LayoutState {
  containerEnabled: boolean
  toggleContainer: () => void
  setContainer: (enabled: boolean) => void
}

export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      containerEnabled: false,
      toggleContainer: () =>
        set((state) => ({ containerEnabled: !state.containerEnabled })),
      setContainer: (enabled: boolean) => set({ containerEnabled: enabled }),
    }),
    {
      name: "layout",
    },
  ),
)
