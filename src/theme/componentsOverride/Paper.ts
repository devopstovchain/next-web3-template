import { Components, Theme } from '@mui/material';

export const Paper = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          marginTop: '6px',
          border: '1px solid',
          borderRadius: '8px',
          borderColor: theme.palette.grey[500],
          boxShadow: theme.shadows[2],
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: 'none',
        },
      },
    },
  };
};
