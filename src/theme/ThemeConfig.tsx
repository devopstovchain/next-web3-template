'use client';
import { CssBaseline, Theme } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider as ThemeMUIProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { componentsOverride } from './componentsOverride';
import { getThemeConfig } from './palette';

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = (props: Props) => {
  const { children } = props;

  const theme = useMemo<Theme>(() => {
    const themeOptions = createTheme(getThemeConfig('light'));
    const newTheme = createTheme(themeOptions);
    newTheme.components = componentsOverride(newTheme);

    return newTheme;
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeMUIProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeMUIProvider>
    </StyledEngineProvider>
  );
};
