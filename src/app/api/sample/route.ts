export async function GET() {
  const json = { message: 'Hello World!' };
  return new Response(JSON.stringify(json), { headers: { 'Content-Type': 'application/json' } });
}
