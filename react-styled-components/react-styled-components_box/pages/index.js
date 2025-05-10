import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents.jsx";

const BoxRow = styled.div`
  display: flex;
  gap: 10px;
`;

export default function HomePage() {
  return (
    <BoxRow>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </BoxRow>
  );
}
