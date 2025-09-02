import { create } from "zustand";

interface CounterState {
  counter: number;
  increase: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  counter: 0,
  increase: () => set((state) => ({ counter: state.counter + 1 })),
}));
