import styled from "styled-components";
import Button from "./Button";
import cartIcon from "./assets/cart-plus-solid.svg";

const StyledContainer = styled.main`
  padding-inline: 3em;
  font-family: "Poppins", sans-serif;
`;

const StyledHeading = styled.h2`
  margin-top: 0;
  color: #4f4f4f;
  font-weight: 500;
  font-size: 2rem;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding-block: 1em;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledFooter = styled.footer`
  margin-block-start: 3em;
  color: #a9a9a9;

  & a {
    color: inherit;
    font-weight: 700;
  }
`;

export default function ButtonContainer() {
  return (
    <StyledContainer>
      <StyledHeading>Buttons</StyledHeading>

      <ButtonGroup>
        <Button labelStart="<Button />">Default</Button>
        <Button labelStart="&:hover, &:focus" state="hover">
          Default
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button labelStart="<Button variant=”outline” />" variant="outline">
          Default
        </Button>
        <Button labelStart="&:hover, &:focus" variant="outline" state="hover">
          Default
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button labelStart="<Button variant=”text” />" variant="text">
          Default
        </Button>
        <Button
          labelStart="<Button variant=”text” />"
          variant="text"
          state="hover"
        >
          Default
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button labelStart="<Button disableShadow />" variant="disableShadow">
          Default
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button labelStart="<Button disabled />" variant="disabled">
          Default
        </Button>
        <Button
          labelStart="<Button variant=disabled” disabled />"
          variant="disabled"
          state="disabled"
        >
          Default
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button
          labelStart="<Button startIcon=”local_grocery_store” />"
          variant="startIcon"
          icon={cartIcon}
        >
          Default
        </Button>
        <Button
          labelStart="<Button endIcon=”local_grocery_store” />"
          variant="endIcon"
          icon={cartIcon}
        >
          Default
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button labelStart="<Button size=”sm” />" variant="primary" size="sm">
          Default
        </Button>
        <Button labelStart="<Button size=”md” />" variant="primary" size="md">
          Default
        </Button>
        <Button labelStart="<Button size=”lg” />" variant="primary" size="lg">
          Default
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button labelStart="<Button color=”default” />">Default</Button>
        <Button labelStart="<Button color=”primary” />" variant="primary">
          Default
        </Button>
        <Button labelStart="<Button color=”secondary” />" variant="secondary">
          Secondary
        </Button>
        <Button labelStart="<Button color=”danger” />" variant="danger">
          Danger
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button labelStart="&:hover, &:focus" state="hover">
          Default
        </Button>
        <Button labelStart="&nbsp;" variant="primary" state="hover">
          Default
        </Button>
        <Button labelStart="&nbsp;" variant="secondary" state="hover">
          Secondary
        </Button>
        <Button labelStart="&nbsp;" variant="danger" state="hover">
          Danger
        </Button>
      </ButtonGroup>

      <StyledFooter>
        <p>
          Created by{" "}
          <a
            href="https://devchallenges.io/portfolio/astr0n0mer"
            target="_blank"
          >
            astr0n0mer
          </a>
          {" - "}{" "}
          <a href="https://devchallenges.io/" target="_blank">
            devChallenges.io
          </a>
        </p>
      </StyledFooter>
    </StyledContainer>
  );
}
