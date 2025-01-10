import { createTheme } from '@mui/material';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { componentsOverride } from 'src/theme/componentsOverride';
import { THEME_MODE } from 'src/theme/model';
import { getThemeConfig } from 'src/theme/palette';

export const themeMode = atomWithStorage<THEME_MODE>('theme', 'light');

export const themeConfig = atom(get => {
  const mode = get(themeMode);
  const themeOptions = createTheme(getThemeConfig(mode));
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return theme;
});
