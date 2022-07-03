import { createGlobalStyle } from "styled-components";
import "./reset.css";

export const GlobalStyle = createGlobalStyle`
 a,button,input {
  all:unset;
 }
 body {
  color:${({ theme }) => theme.fontColor};
  .wrapper {
   width: 390px;
   margin:0 auto;
   background-color: ${({ theme }) => theme.bgColor};
  }
 }
 .inner__wrapper {
  padding:0 20px;
 }
`;
