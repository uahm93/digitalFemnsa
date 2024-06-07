import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '../Dialog'

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
      <Dialog />
    </Toolbar>
  );
}
export default function Appbar({label}: {label: string}) {
  return (
    <AppBar position="static" color="primary" sx={{ background: "#000" }}>
      {appBarLabel(label)}
    </AppBar>
  );
}
