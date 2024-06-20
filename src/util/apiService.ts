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
