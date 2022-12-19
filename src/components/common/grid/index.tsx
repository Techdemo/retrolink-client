import React from 'react';

import { TwoColumnGridContainer } from './styled';

type ReactChildrenOfLength<T extends number> = [] | (React.ReactChild[] & { length: T });

interface TwoColumnGridProps {
  children: ReactChildrenOfLength<2>
};

const TwoColumnGrid = ({ children }: TwoColumnGridProps) => {
  return (
    <TwoColumnGridContainer>
      {children}
    </TwoColumnGridContainer>
  )
};

export const Grid = {
  TwoColumn: TwoColumnGrid,
};
