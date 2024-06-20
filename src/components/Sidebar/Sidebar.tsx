'use client';

import BrightnessAutoRoundedIcon from '@mui/icons-material/BrightnessAutoRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Sheet, Box, IconButton, Typography, Divider } from '@mui/joy';

import { ListItemType } from '@/types/Sidebar';

import { ToggleThemeButton } from '../ToggleThemeButton';
import { SidebarList } from './SidebarList';

// 表示するリストアイテム
const listItems: ListItemType[] = [
  { labelIcon: <HomeRoundedIcon />, labelText: 'Home', href: '/' },
  { labelIcon: <DashboardRoundedIcon />, labelText: 'chat', href: '/chat' },
  { labelIcon: <DashboardRoundedIcon />, labelText: 'sample', href: '/sample' },
  { labelIcon: <ShoppingCartRoundedIcon />, labelText: 'example', href: '/example' },
  { labelIcon: <ShoppingCartRoundedIcon />, labelText: 'example2', href: '/teams/aa' },
  { labelIcon: <ShoppingCartRoundedIcon />, labelText: 'example3', href: '/teams/ii' },
  { labelIcon: <ShoppingCartRoundedIcon />, labelText: 'example4', href: '/example/ui' },
  { labelIcon: <ShoppingCartRoundedIcon />, labelText: 'example5', href: '/example/eo' },
];

export function Sidebar() {
  return (
    <Sheet
      sx={{
        height: '100dvh',
        width: '240px',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid',
        borderColor: 'divider',
        gap: 1,
        p: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pb: 1.5 }}>
        <IconButton variant='soft' color='primary' size='sm'>
          <BrightnessAutoRoundedIcon />
        </IconButton>
        <Typography level='title-lg'>Title</Typography>
      </Box>

      <Divider />

      <Box sx={{ height: '100%' }}>
        <SidebarList listItems={listItems} />
      </Box>

      <Divider />

      <ToggleThemeButton sx={{ mt: 1 }} />
    </Sheet>
  );
}
