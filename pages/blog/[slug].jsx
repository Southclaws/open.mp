/* eslint-disable global-require */

import React from 'react';
import moment from 'moment';

const Post = ({ slug }) => {
  // eslint-disable-next-line import/no-dynamic-require
  const post = require(`../../posts/${slug}.mdx`);

  return (
    <>
      <main>
        <article>
          <div className="meta">
            <p>
              Posted {moment(post.meta.date).format('YYYY-MM-DD')} by {post.meta.author}
            </p>
          </div>
          <post.default />
        </article>
      </main>

      <style jsx global>
        {`
          article {
            padding: 10px;
            max-width: 640px;
            margin: auto;
          }
          pre {
            text-align: left;
          }
        `}
      </style>
    </>
  );
};

Post.getInitialProps = ({ query: { slug } }) => ({ slug });

export default Post;
