import { Box } from '@mui/joy';

import { Message } from '@/types/Chat';

import { MessageItem } from './MessageItem';

type Props = {
  messages: Message[];
};

export function MessageContainer({ messages }: Props) {
  return (
    <Box flexGrow={1} display='flex' flexDirection='column' gap={1}>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </Box>
  );
}
