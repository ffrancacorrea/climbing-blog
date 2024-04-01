import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.greyBackground};
  width: 100%;
  align-items: center;
`;

export default function Footer() {
  return (
    <Wrapper>
      <p>© 2024 Fernanda</p>
    </Wrapper>
  );
}
