'use client';

import { Box, Button, Typography } from '@mui/joy';

import { GetSampleData } from '@/util/apiService';

export default function Page() {
  return (
    <Box>
      <Typography level='h1'>サンプルページ</Typography>
      <Box pt={1}>
        <Button onClick={onClick}>GetData</Button>
      </Box>
    </Box>
  );

  async function onClick() {
    const result = await GetSampleData();
    console.log(result);
  }
}
