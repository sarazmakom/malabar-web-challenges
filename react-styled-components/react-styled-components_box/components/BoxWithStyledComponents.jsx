import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  transition: background-color 0.3s ease;
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;

export default function BoxWithStyledComponents({ isBlack }) {
  return <StyledBox $isBlack={isBlack} />;
}
