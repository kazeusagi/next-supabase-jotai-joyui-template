'use client';

import BrightnessAutoRoundedIcon from '@mui/icons-material/BrightnessAutoRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import {
  Sheet,
  GlobalStyles,
  Box,
  IconButton,
  Typography,
  Input,
  List,
  ListItem,
  ListItemContent,
  Divider,
} from '@mui/joy';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';

import { ToggleThemeButton } from '../ToggleThemeButton';

// import { closeSidebar } from '../utils';
// import ColorSchemeToggle from './ColorSchemeToggle';

export default function Sidebar() {
  return (
    <Sheet
      className='Sidebar'
      sx={{
        height: '100dvh',
        width: '240px',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        gap: 1,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', pb: 2 }}>
        <IconButton variant='soft' color='primary' size='sm'>
          <BrightnessAutoRoundedIcon />
        </IconButton>
        <Typography level='title-lg'>Title</Typography>
      </Box>
      {/* <Input size='sm' startDecorator={<SearchRoundedIcon />} placeholder='Search' /> */}
      <Divider />
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size='sm'
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <ListItemButton>
              <HomeRoundedIcon />
              <ListItemContent>
                <Typography level='title-sm'>Home</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <DashboardRoundedIcon />
              <ListItemContent>
                <Typography level='title-sm'>Dashboard</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton selected>
              <ShoppingCartRoundedIcon />
              <ListItemContent>
                <Typography level='title-sm'>Orders</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <ToggleThemeButton />
    </Sheet>
  );
}
