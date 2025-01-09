import { TypographyOptions } from '@mui/material/styles/createTypography';

//Apply only for typography comp, in case u want change for all comp go to cssBaseLine overdrive
const FONT_PRIMARY_REGULAR = 'General Sans';
const FONT_PRIMARY_MEDIUM = 'General Sans';

export const typography: TypographyOptions = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 400,
    lineHeight: 72 / 64,
    fontSize: 64,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontFamily: FONT_PRIMARY_MEDIUM,
    fontWeight: 500,
    lineHeight: 57 / 48,
    fontSize: 48,
  },
  h3: {
    fontFamily: FONT_PRIMARY_MEDIUM,
    fontWeight: 500,
    lineHeight: 43 / 36,
    fontSize: 36,
    letterSpacing: '-0.03em',
  },
  h4: {
    fontFamily: FONT_PRIMARY_MEDIUM,
    fontWeight: 500,
    lineHeight: 33 / 24,
    fontSize: 24,
    letterSpacing: '-0.03em',
  },
  h5: {
    fontFamily: FONT_PRIMARY_MEDIUM,
    fontWeight: 500,
    lineHeight: 27 / 20,
    fontSize: 20,
  },
  h6: {
    fontWeight: 400,
    lineHeight: 25 / 18,
    fontSize: 18,
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 16,
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: 14,
  },
  body1: {
    lineHeight: 24 / 16,
    fontSize: 16,
    letterSpacing: '-0.01em',
  },
  body2: {
    lineHeight: 19 / 14,
    fontSize: 14,
  },
  caption: {
    lineHeight: 1.5,
    fontSize: 12,
  },
  caption2: {
    lineHeight: 1.2,
    fontSize: 10,
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 12,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 400,
    lineHeight: 24 / 14,
    fontSize: 14,
    textTransform: 'capitalize',
  },
};
