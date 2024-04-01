import styled from "styled-components";
import banner from "../../assets/banner.jpg";

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
`;

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
`;

const Description = styled.div`
  width: 40%;
  margin-top: 10px;
  text-align: justify;
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

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <h1>travel</h1>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          dolorem, magni inventore corrupti impedit ipsam consequatur earum quam
          fugit ratione, sapiente eos facilis reprehenderit sit temporibus
          voluptatibus ipsa, at modi.
        </Description>
        <Button>more</Button>
      </Container>
    </Wrapper>
  );
}
