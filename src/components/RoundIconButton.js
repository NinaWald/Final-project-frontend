import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const StyledButton = styled(Button)`
  background-color: #669999;
  color: #fff;
  border-radius: 50%;
  padding: 4px;
  width: 22px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  gap: 4px;
  margin: 0;

  &:hover {
    background-color: #DDDDBB;
  }
`;

const RoundIconButton = ({ children, variant, color, disabled, onClick, isRemove }) => {
  const icon = isRemove ? <RemoveIcon /> : <AddIcon />;

  return (
    <StyledButton variant={variant} color={color} disabled={disabled} onClick={onClick}>
      {icon}
      {children}
    </StyledButton>
  );
};

export default RoundIconButton;

