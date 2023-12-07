import { create } from "zustand";

const INIT_COUNT = 0;

export const useStore = create((set) => ({
  count: INIT_COUNT,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: INIT_COUNT }),
}));
