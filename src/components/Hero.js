import React from "react";
import styled, { keyframes } from "styled-components";
import { window } from "browser-monads";

const BlinkOne = keyframes`
  0% {
    color: var(--color-one-aa-accessible-large);
  }
  
  25% {
    color: var(--color-white);
  }
  
  100% {
    color: var(--color-one-aa-accessible-large);
  }
`;

const BlinkTwo = keyframes`
  0% {
    color: var(--color-one-aa-accessible-large);
  }
  
  50% {
    color: var(--color-white);
  }
  
  100% {
    color: var(--color-one-aa-accessible-large);
  }
`;

const BlinkThree = keyframes`
  0% {
    color: var(--color-one-aa-accessible-large);
  }
  
  75% {
    color: var(--color-white);
  }
  
  100% {
    color: var(--color-one-aa-accessible-large);
  }
`;

const BlinkFour = keyframes`
  0% {
    fill: var(--color-one-aa-accessible-large);
  }
  
  95% {
    fill: var(--color-white);
  }
  
  100% {
    fill: var(--color-one-aa-accessible-large);
  }
`;

const Hero = styled.div`
  padding: 30px 60px;
  position: relative;
  width: 100%;
  //   height: 100vh;
  height: ${() => `${window.innerHeight}px`};
  min-height: 710px;
  background-color: var(--color-one-aa-accessible-large);
  //   border: 2px solid blue;
  //   scroll-snap-align: center;
`;

const TitleContainer = styled.div`
  width: 300px;
  position: absolute;
  bottom: 80px;
  left: calc(50% - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  //   border: 1px solid green;

  & > * + * {
    margin-top: 2px;
  }
`;

const TitleOne = styled.h1`
  font-family: var(--font-primary), sans-serif;
  font-size: 3.6rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 1px;
  color: var(--color-one-aa-accessible-large);
  text-shadow: -1px -1px 0px var(--color-white), 0px -1px 0px var(--color-white),
    1px -1px 0px var(--color-white), -1px 0px 0px var(--color-white),
    1px 0px 0px var(--color-white), -1px 1px 0px var(--color-white),
    0px 1px 0px var(--color-white), 1px 1px 0px var(--color-white);

  &:hover {
    color: var(--color-white);
  }

  animation: ${BlinkOne} 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite;
`;

const TitleTwo = styled(TitleOne)`
  animation: ${BlinkTwo} 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite;
`;

const TitleThree = styled(TitleOne)`
  font-size: 5rem;
  transform: translate(-1px, -1px);
  animation: ${BlinkThree} 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite;
`;

const TitleArrow = styled.svg`
  margin-top: 24px;
  animation: ${BlinkFour} 0.4s cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite;
`;

const HeroNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   border: 1px solid green;

  & span,
  a {
    font-family: var(--font-primary), sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--color-white);
  }
`;

const HeroComp = () => {
  return (
    <Hero>
      <HeroNav>
        <li>
          <a href="/">All Photo Journals</a>
        </li>
        <li>
          <a href="/">
            {/* With{" "}
            <span
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                fontSize: "2.2rem"
              }}
            >
              ❤
            </span>{" "}
            By Vance Tan */}
            Portfolio Site
          </a>
        </li>
      </HeroNav>
      <TitleContainer>
        <TitleOne>Beautiful</TitleOne>
        <TitleTwo>Beautiful</TitleTwo>
        <TitleThree>Europe</TitleThree>
        <TitleArrow
          enableBackground="new 0 0 512.171 512.171"
          viewBox="0 0 512.171 512.171"
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          fill="var(--color-one-accessible-large)"
          stroke="var(--color-white)"
          strokeWidth="12px"
        >
          <path d="m479.046 283.925c-1.664-3.989-5.547-6.592-9.856-6.592h-116.885v-266.666c0-5.888-4.779-10.667-10.667-10.667h-170.667c-5.888 0-10.667 4.779-10.667 10.667v266.667h-117.333c-4.309 0-8.192 2.603-9.856 6.571-1.643 3.989-.747 8.576 2.304 11.627l212.8 213.504c2.005 2.005 4.715 3.136 7.552 3.136s5.547-1.131 7.552-3.115l213.419-213.504c3.051-3.052 3.968-7.638 2.304-11.628z" />
        </TitleArrow>
      </TitleContainer>
    </Hero>
  );
};

export default HeroComp;
