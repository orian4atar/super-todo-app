import React from 'react';
import ReactDOM from 'react-dom/client';
import { create } from 'zustand'

import './index.scss';

interface State {
  bears: number;
}

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: State) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}));

function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <BearCounter />
      <Controls />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(<App />);
