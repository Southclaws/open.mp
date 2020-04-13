const { parsed: localEnv } = require('dotenv').config();
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
const fs = require('fs');
const mdx = require('@mdx-js/mdx');
const { parse } = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const visit = require('unist-util-visit');

const POSTS_DIRECTORY = './posts/';

const extractMdxMeta = (filename) => {
  let content = fs.readFileSync(POSTS_DIRECTORY + filename, 'utf8');
  let meta = {};
  mdx.sync(content, {
    remarkPlugins: [
      () => (tree) => {
        visit(tree, 'export', (node) => {
          const ast = parse(node.value, {
            plugins: ['jsx'],
            sourceType: 'module',
          });
          traverse(ast, {
            VariableDeclarator: (path) => {
              if (path.node.id.name === 'meta') {
                // eslint-disable-next-line no-eval
                meta = eval(`module.exports = ${generate(path.node.init).code}`);
              }
            },
          });
          });
      },
    ],
        });
  if (meta.title === undefined) {
    throw new Error("property 'title' not found in meta for post " + filename);
      }
  if (meta.author === undefined) {
    throw new Error("property 'author' not found in meta for post " + filename);
  }
  if (meta.date === undefined) {
    throw new Error("property 'date' not found in meta for post " + filename);
  }
  return meta;
};

const getBlogPostPages = () =>
  fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((v) => v.endsWith('.mdx'))
    .map((filename) => ({
      filename,
      slug: filename.substring(0, filename.indexOf('.mdx')),
      ...extractMdxMeta(filename),
    }))
    .map((post) => ({ ...post, date: new Date(post.date) }))
    .sort((a, b) => b.date - a.date);

module.exports = withPlugins([[withMDX], [withImages]], {
  env: {
    GA_ID: 'UA-78828365-7',
    BLOG_POST_LIST: getBlogPostPages(),
    ...localEnv,
  },
  pageExtensions: ['js', 'jsx', 'mdx'],
});
