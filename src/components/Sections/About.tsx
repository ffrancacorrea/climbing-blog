import styled from "styled-components";
import indoor from "../../assets/indoor.jpg";
import outdoor from "../../assets/outdoor.jpg";

import Card from "../Card";
import Locations from "./Locations";

const Wrapper = styled.div`
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
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  font-size: 30px;
  margin: 0 5%;
  font-family: "Noto Sans JP", sans-serif;
  h1 {
    //text-shadow: 1px 1px 2px #000000;
    font-style: normal;
    font-weight: 800;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  //justify-content: space-around;
  z-index: 1;
`;

const Description = styled.div`
  width: 80%;
  margin-top: 10px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.primary};
`;

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
`;

export default function About() {
  return (
    <Wrapper>
      <Container>
        <Card image={indoor} style={{ marginTop: "-7%" }}></Card>
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

        <Card image={outdoor} style={{ marginTop: "-7%" }}></Card>
      </Container>
    </Wrapper>
  );
}
