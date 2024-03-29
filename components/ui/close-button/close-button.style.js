import styled from "@emotion/styled";
import {getCurrentColor} from "styles";

export const ButtonStyle = styled.svg`
  width: 40px;
  height: 40px;
  cursor: pointer;
  fill: ${({theme}) => getCurrentColor("white", theme)};
  transition: fill 0.3s, tranform 0.3s;

  .cross {
    stroke: ${({theme}) => getCurrentColor("black", theme)};
    transition: stroke 0.3s;
  }

  &:hover {
    fill: ${({theme}) => getCurrentColor("primary", theme)};

    .cross {
      stroke: ${({theme}) => getCurrentColor("white", theme)};
    }
  }
`;
