import React, { useRef, useEffect, useState } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { window } from "browser-monads";

// const IntroBlink = keyframes`
//   100% {
//     color: #fcfcfc;
//   }
// `;

const Content = styled.div`
  position: relative;
  width: 100%;
  //   height: 100vh;
  height: ${() => `${window.innerHeight}px`};
  min-height: 710px;
  //   background-color: #ffcb53;
  background-color: ${props => props.color};
  padding: 5rem 6rem;
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
`;

const ContentBody = styled.div`
  margin-top: 50px;
  height: 415px;
  display: flex;
  //   border: 1px solid green;
  overflow: scroll;
  padding-bottom: 15px;
`;

const Writeup = styled.div`
  font-family: var(--font-secondary), sans-serif;
  font-size: 3.6rem;
  font-weight: 200;
  //   color: var(--color-white);
  //   color: #e6e6e6;
  line-height: 1.6;
  width: 60vw;
  flex: 0 0 auto;
  //   border: 1px solid red;
  padding-right: 100px;
`;

let Photos;
Photos = styled.ul`
  //   width: 100vw;
  flex: 0 0 auto;
  //   border: 1px solid blue;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-auto-columns: 200px;
  gap: 2px;
  grid-auto-flow: column;

  & ${Photos}:nth-child(1),
  & ${Photos}:nth-child(4n) {
    grid-column: span 2;
    grid-row: 1 / 3;
  }
`;

const StyledImg = styled(Img)`
  cursor: pointer;
`;

// const ClickedWriteupLandscape = styled.div`
//   position: absolute;
//   top: 6.5rem;
//   right: 6rem;
//   width: 600px;
//   height: 600px;
//   //   border: 2px solid red;
// `;

// const ClickedWriteupPortrait = styled.div`
//   position: absolute;
//   left: 6rem;
//   bottom: 4.6rem;
//   margin-top: 50px;
//   height: 405px;
//   width: 700px;
//   //   border: 1px solid red;
// `;

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

// const BackButtonPortrait = styled(BackButtonLandscape)`
//   right: none;
//   left: 0;
// `;

// const ClickedPhotoIdxLandscape = styled.div`
//   margin-top: 50px;
//   width: 700px;
//   height: 405px;
//   display: flex;
//   justify-content: center;
//   //   border: 2px solid red;

//   & .gatsby-image-wrapper {
//     width: ${props => props.aspectRatio * 405}px;
//     height: 405px;
//   }
// `;

// const ClickedPhotoIdxPortrait = styled.div`
//   position: absolute;
//   top: 6.5rem;
//   right: 6rem;
//   width: 600px;
//   height: 600px;
//   //   border: 2px solid red;
//   display: flex;
//   justify-content: center;

//   & .gatsby-image-wrapper {
//     width: ${props => props.aspectRatio * 600}px;
//     height: 600px;
//   }
// `;

const ClickedPhoto = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 1084.5px;
  //   width: 915px;
  height: 610px;
  //   border: 2px solid red;

  & .gatsby-image-wrapper {
    width: ${props => props.aspectRatio * 610}px;
    height: 610px;
  }
`;

const ClickedWriteup = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 30px;
  //   margin-left: 50px;
  width: 205.5px;
  //   width: 350px;
  height: 610px;
  //   border: 2px solid blue;
`;

const ContentComp = ({ color, loc, locPhotos }) => {
  const [clickedPhotoIdx, setClickedPhotoIdx] = useState(NaN);
  const [scrollLoc, setScrollLoc] = useState(0);
  //   if (clickedPhotoIdx + 1) {
  //     // console.log(clickedPhotoIdx);
  //     // console.log(locPhotos[clickedPhotoIdx]);
  //   }
  const contentBodyRef = useRef();

  //   if (clickedPhotoIdx + 1) {
  //     console.log(
  //       locPhotos[clickedPhotoIdx].fluid.aspectRatio,
  //       locPhotos[clickedPhotoIdx].fluid.aspectRatio * 610
  //     );
  //   }

  useEffect(() => {
    if (contentBodyRef.current) {
      const scrollLeftMax =
        contentBodyRef.current.scrollWidth - contentBodyRef.current.clientWidth;

      contentBodyRef.current.scroll(scrollLoc, 0);

      document
        .querySelector(`.${loc}-title`)
        .childNodes.forEach((node, idx) => {
          if (
            contentBodyRef.current.scrollLeft >=
            Math.round(((idx + 1) / 8) * scrollLeftMax)
          ) {
            node.style.color = "#fcfcfc";
          }
        });

      contentBodyRef.current.addEventListener("wheel", () => {
        loc.split("").forEach((_char, idx) => {
          if (
            contentBodyRef.current.scrollLeft >=
            Math.round(((idx + 1) / 8) * scrollLeftMax)
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
            setScrollLoc(contentBodyRef.current.scrollLeft);
            setClickedPhotoIdx(idx);
          });
        });
    }
  }, [clickedPhotoIdx]);

  const backClickHandler = () => {
    setClickedPhotoIdx(NaN);
  };

  //   const conjureClickedPhotoIdx = aspectRatio => {
  //     if (aspectRatio < 1) {
  //       return (
  //         <>
  //           <ClickedPhotoIdxPortrait aspectRatio={aspectRatio}>
  //             <Img
  //               fluid={locPhotos[clickedPhotoIdx].fluid}
  //               style={{
  //                 objectFit: "none",
  //                 objectPosition: "50% 50%"
  //               }}
  //             />
  //           </ClickedPhotoIdxPortrait>
  //           <ClickedWriteupPortrait>
  //             <BackButtonPortrait color={color} onClick={backClickHandler}>
  //               <span
  //                 style={{
  //                   display: "inline-block",
  //                   transform: "translateY(-4px)"
  //                 }}
  //               >
  //                 &larr;
  //               </span>
  //               Back{" "}
  //             </BackButtonPortrait>
  //           </ClickedWriteupPortrait>
  //         </>
  //       );
  //     } else if (aspectRatio > 1) {
  //       return (
  //         <>
  //           <ClickedPhotoIdxLandscape aspectRatio={aspectRatio}>
  //             <Img fluid={locPhotos[clickedPhotoIdx].fluid} />
  //           </ClickedPhotoIdxLandscape>
  //           <ClickedWriteupLandscape>
  //             <BackButtonLandscape color={color} onClick={backClickHandler}>
  //               Back{" "}
  //               <span
  //                 style={{
  //                   display: "inline-block",
  //                   transform: "translateY(-4px)"
  //                 }}
  //               >
  //                 &rarr;
  //               </span>
  //             </BackButtonLandscape>
  //           </ClickedWriteupLandscape>
  //         </>
  //       );
  //     } else {
  //       return (
  //         <ClickedPhotoIdxPortrait aspectRatio={aspectRatio}>
  //           <Img fluid={locPhotos[clickedPhotoIdx].fluid} />
  //         </ClickedPhotoIdxPortrait>
  //       );
  //     }
  //   };

  return (
    <Content color={color}>
      {clickedPhotoIdx + 1 ? (
        <>
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
        </>
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
          <ContentBody ref={contentBodyRef}>
            <Writeup>
              <span style={{ color: "var(--color-white)" }}>
                Istanbul is a major city in Turkey that straddles Europe and
                Asia across the Bosphorus Strait. Its Old City reflects cultural
                influences of the many empires that once ruled here.
              </span>{" "}
              <span style={{ color: "var(--color-gray)" }}>
                In the Sultanahmet district, the open-air, Roman-era Hippodrome
                was for centuries the site of chariot races, and Egyptian
                obelisks also remain.
              </span>
            </Writeup>
            <Photos className={`content-photos-${loc}`}>
              {locPhotos.map((photo, idx) => {
                return <StyledImg key={idx} fluid={photo.fluid} />;
              })}
            </Photos>
          </ContentBody>
        </>
      )}

      {/* <ContentTitle color={color}>
        {loc.split("").map((char, idx) => {
          return (
            <span key={idx} className={`${loc}-${idx + 1}`}>
              {char}
            </span>
          );
        })}
      </ContentTitle>
      {clickedPhotoIdx + 1 ? (
        conjureClickedPhotoIdx(locPhotos[clickedPhotoIdx].fluid.aspectRatio)
      ) : (
        <ContentBody ref={contentBodyRef}>
          <Writeup>
            <span style={{ color: "var(--color-white)" }}>
              Istanbul is a major city in Turkey that straddles Europe and Asia
              across the Bosphorus Strait. Its Old City reflects cultural
              influences of the many empires that once ruled here.
            </span>{" "}
            <span style={{ color: "var(--color-gray)" }}>
              In the Sultanahmet district, the open-air, Roman-era Hippodrome
              was for centuries the site of chariot races, and Egyptian obelisks
              also remain.
            </span>
          </Writeup>
          <Photos className={`content-photos-${loc}`}>
            {locPhotos.map((photo, idx) => {
              return <StyledImg key={idx} fluid={photo.fluid} />;
            })}
          </Photos>
        </ContentBody>
      )} */}
    </Content>
  );
};

export default ContentComp;
