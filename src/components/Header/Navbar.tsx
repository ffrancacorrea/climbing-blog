import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.tertiary};
  text-shadow: 1px 1px 5px #000000;
`;
const NavigationSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px;
  margin-right: 5%;
  cursor: pointer;
  svg {
    margin-top: 8px;
    filter: drop-shadow(2px 2px 5px #000000);
  }
  div {
    margin-left: 5px;
  }
`;
const NavigationLinks = styled.div`
  display: flex;
  flex: 1;
  margin: 25px;
  justify-content: space-between;
`;
const NavigationItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NavigationItem = styled.div`
  display: flex;
  margin: 0 30px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tertiary};
  cursor: pointer;
`;

export function Navbar() {
  return (
    <Wrapper>
      <NavigationLinks>
        <NavigationItems>
          <NavigationItem>home</NavigationItem>
          <NavigationItem>news</NavigationItem>
          <NavigationItem>articles</NavigationItem>
        </NavigationItems>
      </NavigationLinks>
      <NavigationSearch>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
        <div>search</div>
      </NavigationSearch>
    </Wrapper>
  );
}
