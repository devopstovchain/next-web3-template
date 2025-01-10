'use client';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider, ThemeProvider as ThemeMUIProvider } from '@mui/material/styles';
import { useAtom } from 'jotai';
import { themeConfig } from 'src/jotai/theme/state';

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider = (props: Props) => {
  const { children } = props;
  const [theme] = useAtom(themeConfig);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeMUIProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeMUIProvider>
    </StyledEngineProvider>
  );
};
