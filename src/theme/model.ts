// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    purple: true;
    mint: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xsm: true;
    xxl: true;
  }

  interface TypographyVariants {
    body3: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    caption2: React.CSSProperties;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    default: string;
    paper: string;
    primary: string;
    secondary: string;
    header: string;
    contentHeader: string;
    card: string;
  }

  interface Palette {
    gradient: {
      main: string;
    };
  }

  interface PaletteOptions {
    gradient: {
      main: string;
    };
  }
}

export type THEME_MODE = 'dark' | 'light';
