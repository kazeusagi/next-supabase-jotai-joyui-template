import { createClient } from '@supabase/supabase-js';

import { Database } from '@/types/supabase';

export async function GET() {
  const supabase = createClient<Database>(
    'http://localhost',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',
  );

  // const result = await supabase.from('HelloWorld').insert([{ aa: 'Hello World!' }]);
  let { data: HelloWorld, error } = await supabase.from('HelloWorld').select('aa');
  return new Response(JSON.stringify({ HelloWorld, error }), {
    headers: { 'content-type': 'application/json' },
  });
}
