'use client';

import { useParams, usePathname } from 'next/navigation';

import { Typography } from '@mui/joy';

export default function Page() {
  const pathname = usePathname();
  const params = useParams();
  const { groupId, pageId } = params;

  return (
    <>
      {pathname}
      <Typography>{groupId}</Typography>
      <Typography>{pageId}</Typography>
    </>
  );
}
