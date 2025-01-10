import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { themeMode, themeConfig } from './state';

export const useThemeConfig = () => useAtom(themeConfig);
export const useThemeConfigValue = () => useAtomValue(themeConfig);

export const useThemeMode = () => useAtom(themeMode);
export const useThemeModeValue = () => useAtomValue(themeMode);
export const useSetThemeMode = () => useSetAtom(themeMode);

export const useToggleThemeMode = () => {
  const setThemeMode = useSetThemeMode();
  return () => setThemeMode(prev => (prev === 'light' ? 'dark' : 'light'));
};
