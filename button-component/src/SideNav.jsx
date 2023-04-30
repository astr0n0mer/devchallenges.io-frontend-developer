import styled from "styled-components";

const StyledHeader = styled.header`
  padding-inline: 5ch;
  font-family: "Noto Sans Display", sans-serif;
`;

const StyledHeading = styled.h1`
  margin-top: 0;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
`;

const StyledSpan = styled.span`
  color: #f7542e;
`;

const StyledNav = styled.nav`
  & ul {
    margin-block: 4em;
    padding-left: 0;
  }

  & li {
    margin-block: 2em;
    list-style-type: none;
  }
`;

const StyledLink = styled.a`
  font-weight: 500;
  color: ${({ selected }) => (selected ? "#090F31" : "#9e9e9e")};
  text-decoration: none;
`;

export default function SideNav() {
  return (
    <StyledHeader>
      <StyledHeading>
        <StyledSpan>Dev</StyledSpan>challenges.io
      </StyledHeading>

      <StyledNav>
        <ul>
          <li>
            <StyledLink href="#0">Colors</StyledLink>
          </li>
          <li>
            <StyledLink href="#0">Typography</StyledLink>
          </li>
          <li>
            <StyledLink href="#0">Spaces</StyledLink>
          </li>
          <li>
            <StyledLink href="#0" selected={true}>
              Buttons
            </StyledLink>
          </li>
          <li>
            <StyledLink href="#0">Inputs</StyledLink>
          </li>
          <li>
            <StyledLink href="#0">Grid</StyledLink>
          </li>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
}
