import { client } from "_sanity/lib/client";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const lang = url.searchParams.get("lang");

  const query = `*[_type=="category_${lang}"]|order(number asc)`;
  const data = await client.fetch(query);

  return Response.json(data);
}
