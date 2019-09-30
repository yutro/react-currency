import React, { ReactElement } from 'react';
import { CurrencyType } from '../types/currency';

type PropsType = {
  name: CurrencyType;
};

export const CurrencyIcon = ({ name }: PropsType): ReactElement => {
  return <div>{name}</div>;
};
