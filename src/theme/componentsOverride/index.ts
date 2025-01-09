import { Theme } from '@mui/material';
import { Button } from './Button';
import { CssBaseline } from './CssBaseline';
import { Toolbar } from './Toolbar';
import { Paper } from './Paper';
import { Tooltip } from './Tooltip';
import { Select } from './Select';
import merge from 'lodash.merge';

export function componentsOverride(theme: Theme) {
  return merge(CssBaseline(), Button(theme), Toolbar(theme), Tooltip(theme), Paper(theme), Select(theme));
}
