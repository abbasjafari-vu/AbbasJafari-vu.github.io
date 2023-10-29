import { defineField, defineType } from "sanity";

export default defineType({
  name: "category_fa",
  title: "دسته‌بندی",
  type: "document",
  fields: [
    defineField({
      name: "number",
      title: "شماره دسته‌بندی",
      type: "number",
    }),
    defineField({
      name: "title",
      title: "عنوان",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "تصویر",
      type: "image",
    }),
    defineField({
      name: "description",
      title: "توضیحات",
      type: "text",
    }),
  ],
});
