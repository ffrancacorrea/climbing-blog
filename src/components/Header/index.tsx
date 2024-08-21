import styled from "styled-components"
import banner from "../../assets/banner.jpg"

import { Navbar } from "./Navbar"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.tertiary};
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `linear-gradient(to left bottom, ${theme.colors.pinkBackground}, ${theme.colors.blueBackground} 70%), url(${banner})`};
  width: 100%;
  height: 100vh;
  svg {
    filter: drop-shadow(1px 1px 1px #000000);
  }
  .custom-shape-divider-bottom-1711973093 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1711973093 svg {
    position: relative;
    display: block;
    width: calc(111% + 1.3px);
    height: 64px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1711973093 .shape-fill {
    fill: #ffffff;
  }
  @media (max-width: 700px) {
    height: 70vh;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
  font-size: 30px;
  font-family: "Noto Sans JP", sans-serif;
  text-shadow: 1px 1px 5px #000000;
  h1 {
    font-style: normal;
    z-index: 1;
    font-weight: 800;
    margin-bottom: 0;
  }
  @media (max-width: 700px) {
    height: 80%;
    font-size: 20px;
  }
`

const Description = styled.div`
  width: 40%;
  margin-top: 10px;
  text-align: justify;
  @media (max-width: 700px) {
    width: 80%;
  }
`

const Button = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  border: ${({ theme }) => `5px solid ${theme.colors.secondary}`};
  cursor: pointer;
  @media (max-width: 700px) {
    width: 150px;
    height: 45px;
  }
`

export default function Header() {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <h1>climbing</h1>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          dolorem, magni inventore corrupti impedit ipsam consequatur earum quam
          fugit ratione, sapiente eos facilis reprehenderit sit temporibus
          voluptatibus ipsa, at modi.
        </Description>
        <Button>more</Button>
      </Container>
      <div className="custom-shape-divider-bottom-1711973093">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Wrapper>
  )
}
