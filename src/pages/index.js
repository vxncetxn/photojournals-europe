import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Defaults from "../components/Defaults";
import Hero from "../components/Hero";
import Content from "../components/Content";

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
      <Content
        color="hsl(250, 60%, 65%)"
        loc="wroclaw"
        locPhotos={photos.flatMap(photo => {
          if (photo.relativeDirectory === "wroclaw") {
            return photo.sharp;
          } else {
            return [];
          }
        })}
      />
      <Content
        color="hsl(220, 60%, 65%)"
        loc="istanbul"
        locPhotos={photos.flatMap(photo => {
          if (photo.relativeDirectory === "istanbul") {
            return photo.sharp;
          } else {
            return [];
          }
        })}
      />
    </>
  );
};
