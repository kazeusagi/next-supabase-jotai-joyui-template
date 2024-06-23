import { NextResponse } from 'next/server';

import OpenAI from 'openai';

const openai = new OpenAI();

export async function GET() {
  // const stream = new TransformStream();
  // const writer = stream.writable.getWriter();
  // const encoder = new TextEncoder();

  const completions = await openai.beta.chat.completions.stream({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Pythonについて少し教えて' }],
    stream: true,
  });

  completions.on('content', (delta, snapshot) => {
    console.log(delta);
  });

  // // or, equivalently:
  // for await (const chunk of completions) {
  //   process.stdout.write(chunk.choices[0]?.delta?.content || '');
  // }

  const chatCompletion = await completions.finalChatCompletion();
  console.log(chatCompletion); // {id: "…", choices: […], …}

  // return new Response('stream', {
  //   headers: { 'Content-Type': 'text/plain' },
  // });
  // return response;
  // const response = new NextResponse('', {
  //   headers: {
  //     Connection: 'keep-alive',
  //     'Content-Type': 'text/event-stream',
  //     'Cache-Control': 'no-cache',
  //   },
  // });
  // response.write('data: hello\n\n');
  // return response;

  // const sseWriter = getSSEWriter(writer, encoder);

  // sseWriter.writeMessage({
  //   data: 'Hello, world!',
  // });

  return new NextResponse('aa', {
    headers: {
      'Content-Type': 'text/plain',
      // 'Content-Type': 'text/event-stream',
      // Connection: 'keep-alive',
      // 'Cache-Control': 'no-cache, no-transform',
    },
  });
}
