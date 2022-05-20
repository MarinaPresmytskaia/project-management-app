import React from 'react';
import { Button } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

type TParam = {
  text: string;
  isActive: boolean;
};

const Btn = styled(Button)({
  '&:hover': {
    opacity: '0.8',
  },
  '&:disabled': {
    color: '#ffffff',
  },
});

function LanguageButton({ text, isActive }: TParam) {
  return (
    <Btn
      size="small"
      style={
        isActive
          ? { backgroundColor: 'rgba(255, 255, 255, 0.2)' }
          : { backgroundColor: 'rgba(0, 0, 0, 0.3)' }
      }
      disabled={isActive}
    >
      {text}
    </Btn>
  );
}

export default LanguageButton;
