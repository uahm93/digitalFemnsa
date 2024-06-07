"use client"; 
import { useState, FC } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ChecklistIcon from '@mui/icons-material/Checklist';

type INavigation = {
  value: number;
  setValue: (newValue: number) => void;
}

const Navigation: FC<INavigation> = ({ value, setValue }) => {

  return (
    <Box sx={{ width: '50%', margin: '15px' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Busqueda regular" icon={<ChecklistIcon />} />
        <BottomNavigationAction label="Busqueda por categoria" icon={<AccountTreeIcon />} />
      </BottomNavigation>
    </Box>
  );
}
export default Navigation
