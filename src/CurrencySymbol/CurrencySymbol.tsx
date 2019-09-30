import { CurrencyType } from '../types/currency';
import React, { ReactElement } from 'react';

type PropsType = {
  name: CurrencyType;
};

export const CurrencySymbol = ({ name }: PropsType): ReactElement => {
  return <div>{name}</div>;
};
