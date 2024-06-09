import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, Button, useColorScheme } from '@mui/joy';

export function ToggleThemeButton() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button onClick={onClick}>
      <Box display='flex' alignItems='center' gap={0.5}>
        {mode === 'light' ? (
          <>
            <DarkModeIcon />
            Dark
          </>
        ) : (
          <>
            <LightModeIcon />
            Light
          </>
        )}
      </Box>
    </Button>
  );

  function onClick() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }
}
