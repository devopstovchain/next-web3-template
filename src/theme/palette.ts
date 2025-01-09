import { ThemeOptions } from '@mui/material';
import { THEME_MODE } from './model';
import { typography } from './constants/typography';
import { shadows } from './constants/shadow';

export function getThemeConfig(mode: THEME_MODE): ThemeOptions {
  const getColor = (darkColor: string, lightColor: string) => {
    return mode === 'dark' ? darkColor : lightColor;
  };

  return {
    breakpoints: {
      keys: ['xs', 'xsm', 'sm', 'md', 'lg', 'xl', 'xxl'],
      values: { xs: 0, xsm: 600, sm: 760, md: 960, lg: 1280, xl: 1440, xxl: 1800 },
    },
    palette: {
      mode,
      divider: getColor('#fefef745', '#131c181a'),
      background: {
        paper: getColor('#111C18', '#FFFFFD'),
        default: '#FFFFFF',
        primary: getColor('#6CB7D4', '#111C18'),
        secondary: getColor('#595f5a3d', '#585f5a12'),
        header: '#0E1713',
        contentHeader: '#0E1713',
        card: '#565F5A',
      },
      gradient: {
        main: '#2465DE',
      },
      primary: {
        main: '#2465DE',
        light: '#73D4FF',
      },
      secondary: {
        main: '#39BAFD',
        light: '#C9EDFF',
      },
      info: {
        main: '#1C8CF3',
        light: '#25A0E226',
      },
      success: {
        main: '#03BD9D',
        light: '#00BD9026',
      },
      warning: {
        main: '#FFBC0A',
        light: '#FFBC0A26',
      },
      error: {
        main: '#F06542',
        light: '#F0654226',
      },
      text: {
        primary: '#303030',
        secondary: '#8C8C8C',
      },
      action: {
        selected: getColor('#021C39', '#6cb7d42b'),
        hover: getColor('#FFFFFF0F', '#0000000F'),
      },
    },
    typography: typography,
    shadows: shadows,
  };
}
