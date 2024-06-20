'use client';

import { useState } from 'react';

import { Box, Button, Textarea } from '@mui/joy';

import { Message } from '@/types/Chat';

import { MessageContainer } from './components/MessageContainer';

export default function Page() {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'User',
      content: 'Hello',
    },
    {
      id: '2',
      sender: 'Bot',
      content: 'World!',
    },
  ]);

  return (
    <Box height='100%' display='flex' justifyContent='center'>
      <Box height='100%' width='60rem' display='flex' flexDirection='column' gap={1}>
        <MessageContainer messages={messages} />
        <Box display='flex' gap={1}>
          <Textarea value={value} onChange={onChange} sx={{ flexGrow: 1 }} />
          <Button onClick={onClick} sx={{ flex: '0 0 4rem' }}>
            送信
          </Button>
        </Box>
      </Box>
    </Box>
  );

  function onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function onClick() {
    setMessages((prev) => [
      ...prev,
      {
        id: String(prev.length + 1),
        sender: 'User',
        content: value,
      },
    ]);
    setValue('');
  }
}
