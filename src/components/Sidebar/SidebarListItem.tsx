import { useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { useSetAtom } from 'jotai';

import { ListItem, ListItemButton, ListItemContent, Typography } from '@mui/joy';

import { ListItemType } from '@/types/Sidebar';
import { loadingStatusAtom } from '@/util/atom';

export function SidebarListItem({ labelIcon, labelText, href }: ListItemType) {
  const pathname = usePathname();
  const router = useRouter();

  const setLoadingStatus = useSetAtom(loadingStatusAtom);

  const [selected, setSelected] = useState(false);

  // selectedの更新
  useEffect(() => {
    setSelected(pathname === href);
  }, [pathname]);

  return (
    <ListItem>
      <ListItemButton
        sx={{ borderRadius: (theme) => theme.vars.radius.sm }}
        onClick={onclick}
        selected={selected}
      >
        {labelIcon}
        <ListItemContent>
          <Typography level='title-sm'>{labelText}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );

  function onclick() {
    setLoadingStatus('loading');
    router.push(href);
  }
}
