import styled from "styled-components"
import banner from "../../assets/second_banner.avif"

const Wrapper = styled.div`
  margin: 2% 0;
  margin-top: -5%;
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.tertiary};
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `linear-gradient(to left bottom, ${theme.colors.pinkBackground}, ${theme.colors.blueBackground} 70%), url(${banner})`};
  width: 100%;
  height: 70vh;
  svg {
    filter: drop-shadow(1px 1px 1px white);
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
  .custom-shape-divider-top-1711997092 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1711997092 svg {
    position: relative;
    display: block;
    width: calc(111% + 1.3px);
    height: 64px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-top-1711997092 .shape-fill {
    fill: #ffffff;
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
    height: 75vh;
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
  @media (max-width: 1024px) {
    z-index: 3;
    background-color: white;
  }
  @media (max-width: 700px) {
    width: 100px;
    height: 30px;
  }
`

export default function Locations() {
  return (
    <Wrapper>
      <div className="custom-shape-divider-top-1711997092">
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
      <Container>
        <h1>locations</h1>
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
