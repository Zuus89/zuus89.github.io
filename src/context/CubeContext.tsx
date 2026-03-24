'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export type CubeScene = 'default' | 'data-nodes' | 'etl-pipeline' | 'bar-chart' | 'sql-query';

interface CubeContextType {
  activeScene: CubeScene;
  setActiveScene: (scene: CubeScene) => void;
}

const CubeContext = createContext<CubeContextType>({
  activeScene: 'default',
  setActiveScene: () => {},
});

export function CubeProvider({ children }: { children: ReactNode }) {
  const [activeScene, setActiveScene] = useState<CubeScene>('default');

  return (
    <CubeContext.Provider value={{ activeScene, setActiveScene }}>
      {children}
    </CubeContext.Provider>
  );
}

export function useCube() {
  return useContext(CubeContext);
}
