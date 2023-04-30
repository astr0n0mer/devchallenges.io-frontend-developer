import styled from "styled-components";
import SideNav from "./SideNav";
import ButtonContainer from "./ButtonContainer";

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding-block: 3em 1em;
`;

export default function App() {
  return (
    <StyledApp>
      <SideNav />
      <ButtonContainer />
    </StyledApp>
  );
}
