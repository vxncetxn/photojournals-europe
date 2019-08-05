import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { window } from "browser-monads";

const Content = styled.div`
  position: relative;
  width: 100%;
  //   height: 100vh;
  height: ${() => `${window.innerHeight}px`};
  min-height: 710px;
  //   background-color: #ffcb53;
  background-color: ${props => props.color};
  padding: 5rem 6rem;
  //   scroll-snap-align: center;

  @media (max-width: 1000px) {
    height: auto;
  }

  @media (max-width: 520px) {
    padding: 5rem 3rem;
  }
`;

const ContentTitle = styled.h2`
  font-family: var(--font-secondary), sans-serif;
  font-size: 16rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.color};
  line-height: 1;
  //   border: 1px solid red;

  text-shadow: -1px -1px 0px var(--color-white), 0px -1px 0px var(--color-white),
    1px -1px 0px var(--color-white), -1px 0px 0px var(--color-white),
    1px 0px 0px var(--color-white), -1px 1px 0px var(--color-white),
    0px 1px 0px var(--color-white), 1px 1px 0px var(--color-white),
    -2px -2px 0px var(--color-white), -1px -2px 0px var(--color-white),
    0px -2px 0px var(--color-white), 1px -2px 0px var(--color-white),
    2px -2px 0px var(--color-white), 2px -1px 0px var(--color-white),
    2px 0px 0px var(--color-white), 2px 1px 0px var(--color-white),
    2px 2px 0px var(--color-white), 1px 2px 0px var(--color-white),
    0px 2px 0px var(--color-white), -1px 2px 0px var(--color-white),
    -2px 2px 0px var(--color-white), -2px 1px 0px var(--color-white),
    -2px 0px 0px var(--color-white), -2px -1px 0px var(--color-white);

  //   & > .delete-one {
  //     animation: IntroBlink 0.1s cubic-bezier(0.95, 0.05, 0.795, 0.035);
  //     animation-fill-mode: forwards;
  //   }

  //   ::before {
  //     content: "___";
  //     display: inline-block;
  //     margin-right: 30px;
  //     transform: translateY(-40%);
  //   }

  @media (max-width: 1000px) {
    font-size: calc(11vw);
    text-shadow: -1px -1px 0px var(--color-white),
      0px -1px 0px var(--color-white), 1px -1px 0px var(--color-white),
      -1px 0px 0px var(--color-white), 1px 0px 0px var(--color-white),
      -1px 1px 0px var(--color-white), 0px 1px 0px var(--color-white),
      1px 1px 0px var(--color-white);
  }

  @media (max-width: 520px) {
    text-shadow: -0.5px -0.5px 0px var(--color-white),
      0px -0.5px 0px var(--color-white), 0.5px -0.5px 0px var(--color-white),
      -0.5px 0px 0px var(--color-white), 0.5px 0px 0px var(--color-white),
      -0.5px 0.5px 0px var(--color-white), 0px 0.5px 0px var(--color-white),
      0.5px 0.5px 0px var(--color-white);
  }
`;

const ContentBody = styled.div`
  margin-top: 50px;
  height: 415px;
  display: flex;
  overflow: scroll;
  padding-bottom: 15px;

  // border: 2px solid green;
  @media (max-width: 1000px) {
    height: auto;
    flex-direction: column;
  }
`;

const Writeup = styled.div`
  font-family: var(--font-secondary), sans-serif;
  font-size: 3.6rem;
  font-weight: 200;
  //   color: var(--color-white);
  //   color: #e6e6e6;
  line-height: 1.6;
  width: 40vw;
  flex: 0 0 auto;
  // border: 2px solid red;
  // padding-right: 100px;
  margin-right: 100px;

  @media (max-width: 1000px) {
    width: auto;
    margin-right: 0px;
    margin-bottom: 50px;
    font-size: calc(2.5rem + 1vw);
  }
`;

let Photos;
Photos = styled.ul`
  //   width: 100vw;
  flex: 0 0 auto;
  // border: 2px solid blue;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 200px;
  gap: 2px;
  grid-auto-flow: column;

  @media (max-width: 1000px) {
    height: 400px;
    width: auto;
    overflow: scroll;
  }

  @media (max-width: 520px) {
    height: calc(300px + 2vw);
    // grid-auto-columns: calc(100px + 2vw);
  }

  & ${Photos}:nth-child(1),
  & ${Photos}:nth-child(4n) {
    grid-column: span 2;
    grid-row: 1 / 3;
  }
`;

const StyledImg = styled(Img)`
  cursor: pointer;
`;

const BackButtonLandscape = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: var(--font-secondary), sans-serif;
  font-size: 3.6rem;
  font-weight: 200;
  background: none;
  border: none;
  border-bottom: 2px solid var(--color-white);
  color: var(--color-white);
  cursor: pointer;
`;

const ClickedPhoto = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 1084.5px;
  // border: 2px solid red;

  & .gatsby-image-wrapper {
    width: ${props => props.aspectRatio * 610}px;
    // border: 2px solid green;
  }
`;

const ClickedWriteup = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 30px;
  flex: 1;
  // width: 204.5px;
  height: 610px;
  // border: 2px solid blue;
`;

const ContentComp = ({ color, loc, locPhotos }) => {
  const [clickedPhotoIdx, setClickedPhotoIdx] = useState(NaN);
  const [scrollLoc, setScrollLoc] = useState(0);

  const [isNarrow, setIsNarrow] = useState(window.innerWidth < 1001);
  const [isOnMobile, setIsOnMobile] = useState(window.innerWidth < 521);

  const scrollerRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 521) {
        setIsOnMobile(true);
        setIsNarrow(true);
      } else if (window.innerWidth < 1001) {
        setIsOnMobile(false);
        setIsNarrow(true);
      } else {
        setIsOnMobile(false);
        setIsNarrow(false);
      }
    });
  }, []);

  useEffect(() => {
    if (scrollerRef.current) {
      // const scrollLeftMax =
      //   scrollerRef.current.scrollWidth - scrollerRef.current.clientWidth;

      scrollerRef.current.scroll(scrollLoc, 0);

      document
        .querySelector(`.${loc}-title`)
        .childNodes.forEach((node, idx) => {
          if (
            scrollerRef.current.scrollLeft >=
            Math.round(
              ((idx + 1) / loc.length) *
                (scrollerRef.current.scrollWidth -
                  scrollerRef.current.clientWidth)
            )
          ) {
            node.style.color = "#fcfcfc";
          } else {
            document.querySelector(
              `.${loc}-${idx + 1}`
            ).style.color = `${color}`;
          }
        });

      scrollerRef.current.addEventListener("wheel", () => {
        loc.split("").forEach((_char, idx) => {
          if (
            scrollerRef.current.scrollLeft >=
            Math.round(
              ((idx + 1) / loc.length) *
                (scrollerRef.current.scrollWidth -
                  scrollerRef.current.clientWidth)
            )
          ) {
            document.querySelector(`.${loc}-${idx + 1}`).style.color =
              "#fcfcfc";
          } else {
            document.querySelector(
              `.${loc}-${idx + 1}`
            ).style.color = `${color}`;
          }
        });
      });

      document
        .querySelectorAll(`.content-photos-${loc} .gatsby-image-wrapper`)
        .forEach((photo, idx) => {
          photo.addEventListener("mouseenter", () => {
            photo.childNodes[2].style.opacity = "0.6";
          });
          photo.addEventListener("mouseleave", () => {
            photo.childNodes[2].style.opacity = "1";
          });
          photo.addEventListener("click", () => {
            setScrollLoc(scrollerRef.current.scrollLeft);
            setClickedPhotoIdx(idx);
          });
        });
    }
  }, [clickedPhotoIdx, isNarrow]);

  const backClickHandler = () => {
    setClickedPhotoIdx(NaN);
  };

  return (
    <Content color={color}>
      {clickedPhotoIdx + 1 ? (
        <div style={{ display: "flex" }}>
          <ClickedPhoto
            aspectRatio={locPhotos[clickedPhotoIdx].fluid.aspectRatio}
          >
            <Img fluid={locPhotos[clickedPhotoIdx].fluid} />
          </ClickedPhoto>

          <ClickedWriteup>
            <BackButtonLandscape color={color} onClick={backClickHandler}>
              Back{" "}
              <span
                style={{
                  display: "inline-block",
                  transform: "translateY(-4px)"
                }}
              >
                &rarr;
              </span>
            </BackButtonLandscape>
          </ClickedWriteup>
        </div>
      ) : (
        <>
          <ContentTitle className={`${loc}-title`} color={color}>
            {loc.split("").map((char, idx) => {
              return (
                <span key={idx} className={`${loc}-${idx + 1}`}>
                  {char}
                </span>
              );
            })}
          </ContentTitle>
          <ContentBody ref={isNarrow ? null : scrollerRef}>
            <Writeup>
              <span style={{ color: "var(--color-white)" }}>
                Istanbul is a major city in Turkey that straddles Europe and
                Asia across the Bosphorus Strait.
              </span>{" "}
              <span style={{ color: "var(--color-gray)" }}>
                In the Sultanahmet district, the open-air, Roman-era Hippodrome
                was for centuries the site of chariot races.
              </span>
            </Writeup>
            {isOnMobile ? (
              <div>Hello!</div>
            ) : (
              <Photos
                ref={isNarrow ? scrollerRef : null}
                className={`content-photos-${loc}`}
              >
                {locPhotos.map((photo, idx) => {
                  return <StyledImg key={idx} fluid={photo.fluid} />;
                })}
              </Photos>
            )}
          </ContentBody>
        </>
      )}
    </Content>
  );
};

export default ContentComp;
