"use client";

import { useCounter } from "../../hooks/useCounter";
import { useCounterStore } from "../../store/counterStore";

export default function DashboardPage() {
  const { count, increment } = useCounter();
  const { counter, increase } = useCounterStore();

  return (
    <div>
      <h2 className="text-xl font-bold">Dashboard</h2>
      <p>Local Hook Counter: {count}</p>
      <button onClick={increment} className="bg-green-500 text-white px-3 py-1 rounded">
        + Local
      </button>

      <p className="mt-4">Zustand Store Counter: {counter}</p>
      <button onClick={increase} className="bg-blue-500 text-white px-3 py-1 rounded">
        + Global
      </button>
    </div>
  );
}
