import { CSSProperties } from "react";
import styled from "styled-components";

interface ICard {
  image: string;
  style?: CSSProperties;
}

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const Box = styled.div<ICard>`
  width: 500px;
  height: 700px;
  box-shadow: 0px 0px 15px #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme, image }) =>
    `linear-gradient(to left bottom, ${theme.colors.pinkBackground}, ${theme.colors.blueBackground} 70%), url(${image})`};
`;
export default function Card({ image, style }: ICard) {
  return (
    <Wrapper style={style}>
      <Box image={image}></Box>
    </Wrapper>
  );
}
