import { makeSource, defineDocumentType } from "contentlayer/source-files";


const computedFields:any = {
  slug: {
    type: "string",
    resolve: (doc:any) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    image: { type: "string", required: true },
    createdAt: { type: "string", required: true },
  },
  computedFields,
}));
const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: "snippets/*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    logo: { type: "string", required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Blog, Snippet],
  mdx: {
    rehypePlugins: [],
  },
});
