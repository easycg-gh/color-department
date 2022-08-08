import styled from "@emotion/styled";
import { H3 } from "components";
import { Text } from "components";
import { getCurrentColorStyles } from "styles";
import { getCurrentColor } from "styles";
import { getCurrentPaddingStyle } from "styles";
import { getCurrentMarginStyle } from "styles";
import { getCurrentBackgroundColorStyles } from "styles";
import { applyColor } from "styles";
import { colors } from "styles";

export const ModalShopInner = styled.div`
width:100%;
display:flex;
height:100vh;
`;

export const ProductImage = styled.div`
width:50%;
  ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};
`;



export const InformationColumn = styled.div`
  width: 50%;
  ${getCurrentPaddingStyle("horizontal", "md")}
  ${getCurrentPaddingStyle("bottom", "md")}
  ${getCurrentPaddingStyle("top", "lg")}
  background-color:#000;
  /* ${({ theme }) => getCurrentBackgroundColorStyles("black", theme)}; */
`;
export const TextContainer = styled.div`
display:flex;
justify-content:space-between;
`;

export const ProductName = styled(H3)``;

export const ProductPrice = styled(H3)`
  ${({ theme }) => getCurrentColorStyles("white", theme)};
`;
export const ProductDiscription = styled(Text)`
  width: 50%;
  ${({ theme }) => getCurrentColorStyles("white", theme)};
  ${getCurrentPaddingStyle("bottom", "lg")};
  ${getCurrentPaddingStyle("top", "md")};
`;
export const FormWrapper = styled.div`
  background-color: #000;
`;



// export const ModalShopWrapper = styled.div``;
// export const ModalShopWrapper = styled.div``;
// export const ModalShopWrapper = styled.div``;