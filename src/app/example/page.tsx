'use client';

import { useSetAtom } from 'jotai';

import { Box, Button, Typography } from '@mui/joy';
import { toast } from 'react-hot-toast';

import { loadingStatusAtom } from '@/util/atom';

export default function Page() {
  const setLoadingStatus = useSetAtom(loadingStatusAtom);

  return (
    <Box>
      <Typography level='h1'>Example Page</Typography>
      <Box display='flex' gap={1} pt={3}>
        <Button color='success' onClick={onClickSuccess}>
          Success Loading
        </Button>
        <Button color='danger' onClick={onClickError}>
          Error Loading
        </Button>
      </Box>
    </Box>
  );

  function onClickSuccess() {
    setLoadingStatus('loading');
    setTimeout(() => {
      setLoadingStatus('success');
      toast.success('Successfully loaded.');
    }, 1000);
  }

  function onClickError() {
    setLoadingStatus('loading');
    setTimeout(() => {
      setLoadingStatus('error');
      toast.error('An error occurred.');
    }, 1000);
  }
}
