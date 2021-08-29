import { Text } from '@chakra-ui/react';
import React from 'react';

type DisplayValueProps = {
  valueLabel: number,
}

export const DisplayValue: React.FC<DisplayValueProps>= ({valueLabel}:DisplayValueProps): JSX.Element => {
  return <Text data-testid="display-value">{valueLabel}</Text>
};