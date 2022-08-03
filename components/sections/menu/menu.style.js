import { keyframes } from "@emotion/css";
import styled from "@emotion/styled";
import { getCurrentBackgroundColorStyles, colors } from "styles";

export const MenuWrapper = styled.div`
    margin: 0 auto ;
    left: 0;
    right: 0;
    max-width: 1600px;
    position: fixed;
    z-index: 100;
    top: 100px;
    overflow: hidden;
    height : ${({ isOpen }) => isOpen ? "calc(100vh - 100px)" : "0"};
    background-color: ${colors.black};
    transition: height 0.7s;
`
export const MenuBody = styled.nav`
    position: absolute;
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
`
export const MenuMap = styled.div`
width: 50%;
background-image: url('./tmp-map.jpg');
`
export const MenuList = styled.ul`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const CompanyInfo = styled.div`
    position: absolute;
    left:0;
    bottom:0;
    padding:0 0 40px 40px;
    span {
        display:block;
        color: ${colors.white};
    }
`
export const MenuFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    position: absolute;
    width:100%;
    height: 100px;
    bottom: 0;    
`

export const MenuFooterItem = styled.div`
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.black};
    &:hover{
        ${({ theme }) => getCurrentBackgroundColorStyles("primary", theme)};    
        & span {
            color: ${colors.black};
            transition : color 0.5s;    
        } 
    }
    transition : background-color 0.5s;
`