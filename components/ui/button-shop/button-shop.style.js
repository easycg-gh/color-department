import {
  applyMargins,
  applyPaddings,
  getCurrentBackgroundColorStyles,
  getCurrentColor,
} from "styles";
import styled from "@emotion/styled";

export const Button = styled.button`
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}
  border: 2px solid ${({ theme }) => getCurrentColor("white", theme)};

  &:hover {
    ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}
  }
  ${applyMargins}
  ${applyPaddings}
`;

export const PlusLineHorizontal = styled.div`
  width: 24px;
  height: 2px;
  ${({ theme }) => getCurrentBackgroundColorStyles("white", theme)}
  position: absolute;
  top: 50%;
`;

export const PlusLineVertical = styled(PlusLineHorizontal)`
  transform: rotate(90deg);
`;
