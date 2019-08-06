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

  @media (max-width: 800px), (orientation: portrait) {
    height: auto;
  }

  @media (max-width: 520px) {
    padding: 5rem 2rem;
  }
`;

const ContentTitle = styled.h2`
  font-family: var(--font-secondary), sans-serif;
  // font-size: 16rem;
  font-size: calc(2.5rem + 9vw);
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

  @media (max-width: 800px), (orientation: portrait) {
    font-size: calc(11vw);
    text-shadow: -1px -1px 0px var(--color-white),
      0px -1px 0px var(--color-white), 1px -1px 0px var(--color-white),
      -1px 0px 0px var(--color-white), 1px 0px 0px var(--color-white),
      -1px 1px 0px var(--color-white), 0px 1px 0px var(--color-white),
      1px 1px 0px var(--color-white);
  }

  // @media (max-width: 520px) {
  //   text-shadow: -0.5px -0.5px 0px var(--color-white),
  //     0px -0.5px 0px var(--color-white), 0.5px -0.5px 0px var(--color-white),
  //     -0.5px 0px 0px var(--color-white), 0.5px 0px 0px var(--color-white),
  //     -0.5px 0.5px 0px var(--color-white), 0px 0.5px 0px var(--color-white),
  //     0.5px 0.5px 0px var(--color-white);
  // }
`;

const ContentBody = styled.div`
  margin-top: 50px;
  height: 415px;
  display: flex;
  overflow: scroll;
  padding-bottom: 15px;

  // border: 2px solid green;

  @media (max-width: 800px), (orientation: portrait) {
    height: auto;
    flex-direction: column;
  }
`;

const Writeup = styled.div`
  font-family: var(--font-secondary), sans-serif;
  // font-size: 3.6rem;
  font-size: calc(2rem + 1vw);
  font-weight: 200;
  line-height: 1.6;
  width: 30vw;
  flex: 0 0 auto;
  // border: 2px solid red;
  margin-right: 50px;

  @media (max-width: 800px), (orientation: portrait) {
    width: auto;
    margin-right: 0px;
    margin-bottom: 50px;
    // font-size: calc(2.5rem + 1vw);
  }
`;

let DefaultPhotos;
DefaultPhotos = styled.ul`
  //   width: 100vw;
  flex: 0 0 auto;
  // border: 2px solid blue;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 200px;
  gap: 2px;
  grid-auto-flow: column;

  @media (max-width: 800px), (orientation: portrait) {
    height: 400px;
    width: auto;
    overflow: scroll;
  }

  @media (max-width: 520px) {
    height: calc(300px + 2vw);
    // grid-auto-columns: calc(100px + 2vw);
  }

  & ${DefaultPhotos}:nth-child(1),
  & ${DefaultPhotos}:nth-child(4n) {
    grid-column: span 2;
    grid-row: 1 / 3;
  }
`;

// const MobilePhotos = styled.ul`
//   display: grid;
//   grid-template-rows: calc(100vh - 10rem);
//   grid-auto-columns: 100%;
//   gap: 2px;
//   grid-auto-flow: column;
//   overflow: scroll;
//   -webkit-overflow-scrolling: touch;
//   scroll-snap-type: x mandatory;
//   -webkit-scroll-snap-type: mandatory;
//   -webkit-scroll-snap-points-x: repeat(100%);
//   scroll-snap-points-x: repeat(100%);
//   background-color: #9485e0;
//   // border: 2px solid red;

//   & > .gatsby-image-wrapper {
//     scroll-snap-align: start;
//   }
// `;

// const MobilePhotosTwo = styled.ul`
//   & > .gatsby-image-wrapper {
//     width: 100%;
//     margin-top: 20px;
//   }
// `;

const MobilePhotos = styled.ul`
  display: grid;
  height: calc(100vh - 10rem);
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 90%;
  gap: 2px;
  grid-auto-flow: column;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  & > .portrait {
    grid-row: 1 / 3;
  }

  & > .gatsby-image-wrapper {
    // border: 1px solid red;
    background-color: #9485e0;
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
  // font-size: 3.6rem;
  font-size: calc(2.4rem + 1.1vw);
  font-weight: 200;
  background: none;
  border: none;
  border-bottom: 2px solid var(--color-white);
  color: var(--color-white);
  cursor: pointer;
`;

const ClickedPhoto = styled.div`
  display: inline-flex;
  align-items: center;
  width: 82%;
  height: ${window.innerHeight - 100}px;
  // border: 2px solid red;

  & .gatsby-image-wrapper {
    width: 100%;
    max-height: 100%;
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

  const [isOnMobile, setIsOnMobile] = useState(false);

  const scrollerRef = useRef();

  const portraitLocPhotos = [];
  const landscapeLocPhotos = [];
  const pairedLandscapeLocPhotos = [];
  const mobileLocPhotos = [];
  locPhotos.forEach(photo => {
    if (photo.fluid.aspectRatio < 1) {
      portraitLocPhotos.push(photo);
    } else {
      landscapeLocPhotos.push(photo);
    }
  });
  if (landscapeLocPhotos.length % 2) {
    for (let n = 0; n < Math.floor(landscapeLocPhotos.length / 2); n++) {
      const group = [landscapeLocPhotos[n * 2], landscapeLocPhotos[n * 2 + 1]];
      pairedLandscapeLocPhotos.push(group);
    }
    pairedLandscapeLocPhotos.push([
      landscapeLocPhotos[landscapeLocPhotos.length - 1],
      null
    ]);
  } else {
    for (let n = 0; n < landscapeLocPhotos.length / 2; n++) {
      const group = [landscapeLocPhotos[n * 2], landscapeLocPhotos[n * 2 + 1]];
      pairedLandscapeLocPhotos.push(group);
    }
  }

  const minLength = Math.min(
    portraitLocPhotos.length,
    pairedLandscapeLocPhotos.length
  );

  for (let n = 0; n < minLength; n++) {
    mobileLocPhotos.push(portraitLocPhotos[n]);
    pairedLandscapeLocPhotos[n].forEach(item => {
      mobileLocPhotos.push(item);
    });
  }

  if (portraitLocPhotos.length > pairedLandscapeLocPhotos.length) {
    for (let n = minLength; n < portraitLocPhotos.length; n++) {
      mobileLocPhotos.push(portraitLocPhotos[n]);
    }
  } else {
    for (let n = minLength; n < pairedLandscapeLocPhotos.length; n++) {
      pairedLandscapeLocPhotos[n].forEach(item => {
        if (item) {
          mobileLocPhotos.push(item);
        }
      });
    }
  }

  useEffect(() => {
    setIsOnMobile(window.innerWidth < 801);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 801) {
        setIsOnMobile(true);
      } else {
        setIsOnMobile(false);
      }
    });
  }, []);

  useEffect(() => {
    if (scrollerRef.current) {
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
        .querySelectorAll(`.content-photos-${loc} .photos-hover-active`)
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
  }, [clickedPhotoIdx, isOnMobile]);

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
            <Img
              fluid={locPhotos[clickedPhotoIdx].fluid}
              imgStyle={{ objectFit: "contain" }}
            />
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
          <ContentBody ref={isOnMobile ? null : scrollerRef}>
            <Writeup>
              <span style={{ color: "var(--color-white)" }}>
                Following the footsteps of many a hundred tiny little dwarves
                here all day long
              </span>{" "}
              <span style={{ color: "var(--color-gray)" }}>
                brought me to charming and colourful streets and buildings,
                tantalising pierogis and the most authentic locals.
              </span>
            </Writeup>
            {isOnMobile ? (
              <MobilePhotos
                ref={scrollerRef}
                className={`content-photos-${loc}`}
              >
                {mobileLocPhotos.map((photo, idx) => {
                  return (
                    <Img
                      key={idx}
                      fluid={photo.fluid}
                      className={
                        photo.fluid.aspectRatio < 1 ? "portrait" : null
                      }
                      imgStyle={{ objectFit: "cover" }}
                    />
                  );
                })}
              </MobilePhotos>
            ) : (
              <DefaultPhotos className={`content-photos-${loc}`}>
                {locPhotos.map((photo, idx) => {
                  return (
                    <StyledImg
                      key={idx}
                      fluid={photo.fluid}
                      className="photos-hover-active"
                    />
                  );
                })}
              </DefaultPhotos>
            )}
          </ContentBody>
        </>
      )}
    </Content>
  );
};

export default ContentComp;
