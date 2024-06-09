import { List } from '@mui/joy';

import { ListItemType } from '@/types/Sidebar';

import { SidebarListItem } from './SidebarListItem';

type Props = { listItems: ListItemType[] };

export function SidebarList({ listItems }: Props) {
  return (
    <List size='sm' sx={{ gap: 1 }}>
      {listItems.map((item) => (
        <SidebarListItem key={item.href} {...item} />
      ))}
    </List>
  );
}
