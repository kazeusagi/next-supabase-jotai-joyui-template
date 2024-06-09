import { Box, Typography } from '@mui/joy';

export default function Home() {
  return (
    <Box
      display='flex'
      height='100dvh'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Typography>ハローワールド</Typography>
      <Typography>{'ハローワールド->'}</Typography>
      <Typography>Hello World !!</Typography>
      <Typography>1234567890</Typography>
    </Box>
  );
}
