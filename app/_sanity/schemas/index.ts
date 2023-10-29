import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./blockContent";
import category from "./category_fa";
import post from "./post_fa";
import author from "./author_fa";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent],
};
