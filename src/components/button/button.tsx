import { Button } from '@chakra-ui/react';
import React from 'react';

export type CurtomButtonProps = {
  callback?: ()=> void;
  label: string;
  color?: string;
}

export const CustomButton: React.FC<CurtomButtonProps> = (
  {
    callback,
    label,
    color = "blue"
  }: CurtomButtonProps
): JSX.Element => {
  return <Button colorScheme="white" background={color} data-testid="custom-button" onClick={callback}>{label}</Button>
};