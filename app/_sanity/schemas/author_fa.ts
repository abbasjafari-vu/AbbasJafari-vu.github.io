import { defineField, defineType } from "sanity";

export default defineType({
  name: "author_fa",
  title: "نویسنده",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "نام",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "نامک",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "تصویر",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "متن جایگزین",
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "بیوگرافی",
      type: "array",
      of: [
        {
          title: "بلاک",
          type: "block",
          styles: [{ title: "نرمال", value: "normal" }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: "social",
      title: "آیکون های شبکه اجتماعی",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "title",
              type: "string",
              title: "عنوان",
            },
            {
              name: "link",
              type: "string",
              title: "لینک",
            },
            {
              name: "alt",
              type: "string",
              title: "متن جایگزین",
            },
          ],
        },
      ],
    }),
  ],
});
