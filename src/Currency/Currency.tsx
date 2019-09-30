import React, { ReactNode } from 'react';
import { CurrencyType } from '../types/currency';
import CurrencyIcon from '../CurrencyIcon';
import { CurrencySymbol } from '../CurrencySymbol/CurrencySymbol';

export type CurrencyPropsType = {
  name: CurrencyType;
  symbol?: boolean;
  icon?: boolean;
};

export const Currency = ({
  symbol,
  icon,
  name
}: CurrencyPropsType): ReactNode => {
  if (icon) {
    return <CurrencyIcon name={name} />;
  }

  if (symbol) {
    return <CurrencySymbol name={name} />;
  }

  return null;
};
