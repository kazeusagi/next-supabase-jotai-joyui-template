import OpenAI from 'openai';

const openai = new OpenAI();

export async function GET() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0]);

  return new Response(JSON.stringify(completion.choices[0].message.content), {
    headers: { 'Content-Type': 'text/plain' },
  });
}
