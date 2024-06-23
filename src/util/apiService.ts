export async function GetSampleData() {
  const response = await fetch('/api/sample', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();
  return json;
}

export async function ask(message: string) {
  const response = await fetch('/api/openai', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  const result = await response.text();
  return result;
}
