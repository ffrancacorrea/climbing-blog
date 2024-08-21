import styled from "styled-components"
import indoor from "../../assets/indoor.jpg"
import outdoor from "../../assets/outdoor.jpg"

import Card from "../Card"
import Locations from "./Locations"

const Wrapper = styled.div`
  display: flex;
  margin: 2% 0;
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.secondary};
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  font-size: 30px;
  font-family: "Noto Sans JP", sans-serif;
  width: 100%;
  h1 {
    //text-shadow: 1px 1px 2px #000000;
    font-style: normal;
    font-weight: 800;
  }
  @media (min-width: 1024px) {
    margin: 0 5%;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: -10%;
  }
  @media (max-width: 700px) {
    font-size: 15px;
  }
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 3%;
  z-index: 1;
  @media (max-width: 1024px) {
    margin: 10%;
  }
`

const Description = styled.div`
  width: 80%;
  margin-top: 10px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 1024px) {
    width: 100%;
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: 700px) {
    div {
      width: 300px;
      height: 400px;
    }
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
    width: 100px;
    height: 30px;
  }
`

export default function About() {
  return (
    <Wrapper>
      <Container>
        <CardWrapper>
          <Card image={indoor} style={{ marginTop: "-10%" }}></Card>
        </CardWrapper>
        <DescriptionWrapper>
          <h1>indoor</h1>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            dolorem, magni inventore corrupti impedit ipsam consequatur earum
            quam fugit ratione, sapiente eos facilis reprehenderit sit
            temporibus voluptatibus ipsa, at modi.
          </Description>
          <Button>more</Button>
        </DescriptionWrapper>
      </Container>
      <Locations />
      <Container>
        <DescriptionWrapper>
          <h1>outdoor</h1>
          <Description>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            dolorem, magni inventore corrupti impedit ipsam consequatur earum
            quam fugit ratione, sapiente eos facilis reprehenderit sit
            temporibus voluptatibus ipsa, at modi.
          </Description>
          <Button>more</Button>
        </DescriptionWrapper>
        <CardWrapper>
          <Card image={outdoor} style={{ marginTop: "-10%" }}></Card>
        </CardWrapper>
      </Container>
    </Wrapper>
  )
}
