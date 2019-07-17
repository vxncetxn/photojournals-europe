import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Defaults from "../components/Defaults";
import Hero from "../components/Hero";
import Content from "../components/Content";

const locs = ["wroclaw", "istanbul", "milan", "interlaken", "lauterbrunnen"];
const colors = [
  "var(--color-one-aa-accessible-large)",
  "var(--color-two-aa-accessible-large)",
  "var(--color-three-aa-accessible-large)",
  "var(--color-four-aa-accessible-large)"
];

export default () => {
  const photos = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          relativeDirectory
        }
      }
    }
  `).allFile.nodes;

  return (
    <>
      <Defaults />
      <Hero />
      {locs.map((loc, idx) => {
        console.log(idx, colors[(idx + 1) % 4]);
        return (
          <Content
            key={loc}
            color={`${colors[(idx + 1) % 4]}`}
            loc={loc}
            locPhotos={photos.flatMap(photo => {
              if (photo.relativeDirectory === loc) {
                return photo.sharp;
              } else {
                return [];
              }
            })}
          />
        );
      })}
    </>
  );
};
