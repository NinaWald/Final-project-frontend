import React from 'react';
import styled from 'styled-components';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ButtonContainer = styled.div`
  justify-content: center;
  display: inline;
  margin: 5px;
`;

const RoundIconButton = ({ color, disabled, onClick, isRemove }) => {
  const icon = isRemove ? <RemoveIcon /> : <AddIcon />;

  return (
    <ButtonContainer>
      <Fab
        size="small"
        color={color}
        disabled={disabled}
        onClick={onClick}>
        {icon}
      </Fab>
    </ButtonContainer>
  );
};

export default RoundIconButton;

