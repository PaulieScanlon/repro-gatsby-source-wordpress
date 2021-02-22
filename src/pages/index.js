import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const {
    allWpMediaItem: { edges }
  } = useStaticQuery(graphql`
    query Mpegs {
      allWpMediaItem(filter: { mimeType: { eq: "audio/mpeg" } }) {
        edges {
          node {
            mediaItemUrl
            mimeType
          }
        }
      }
    }
  `);

  console.log({ edges });

  return (
    <div>
      <div>IndexPage</div>

      {edges.map((item, index) => {
        const { mediaItemUrl } = item.node;
        return <code key={index}>{JSON.stringify(mediaItemUrl, null, 2)}</code>;
      })}
    </div>
  );
};

export default IndexPage;
