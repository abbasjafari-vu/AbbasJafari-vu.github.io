import { defineType, defineField } from "sanity";

export default defineType({
  name: "post_fa",
  title: "پست",
  type: "document",
  fields: [
    defineField({
      name: "number",
      title: "شماره پست",
      type: "number",
    }),
    defineField({
      name: "title",
      title: "عنوان",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "نامک",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "نویسنده",
      type: "reference",
      to: { type: "author_fa" },
    }),
    defineField({
      name: "mainImage",
      title: "تصویر اصلی",
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
      name: "categories",
      title: "دسته‌بندی",
      type: "array",
      of: [{ type: "reference", to: { type: "category_fa" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "انتشار در",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "بدنه",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author_fa.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
