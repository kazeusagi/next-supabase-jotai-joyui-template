import { Box, Typography } from '@mui/joy';

import { Message } from '@/types/Chat';

type Props = {
  message: Message;
};

export function MessageItem({ message }: Props) {
  return (
    <Box display='flex' justifyContent={message.sender == 'User' ? 'end' : 'start'}>
      <Typography
        variant='soft'
        width='fit-content'
        color={message.sender == 'User' ? 'primary' : 'neutral'}
        px={2}
        py={1}
      >
        {message.content}
      </Typography>
    </Box>
  );
}
