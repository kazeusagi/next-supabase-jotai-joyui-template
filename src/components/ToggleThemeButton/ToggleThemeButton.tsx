import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, Button, useColorScheme } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';

type Props = {
  sx?: SxProps;
};

export function ToggleThemeButton({ sx }: Props) {
  const { mode, setMode } = useColorScheme();
  return (
    <Button onClick={onClick} sx={sx}>
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
