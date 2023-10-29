import { client } from "_sanity/lib/client";
import { Params } from "_types";

export async function GET(request: Request, { params }: Params) {
  const postTitle = decodeURI(params.slug.toString());

  const query = `*[_type=="post_${params.lang}" && title=="${postTitle}"][0]`;
  const data = await client.fetch(query);

  return Response.json(data);
}
