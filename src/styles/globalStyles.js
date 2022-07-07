import { createGlobalStyle } from "styled-components";
import "./reset.css";

export const GlobalStyle = createGlobalStyle`
 a,button,input {
  all:unset;
  cursor:pointer;
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
 .main__title {
  font-size: 24px;
  font-weight: bold;
  color:${({ theme }) => theme.fontColor};
 }

 .story__contianer {
   background-color: ${({ theme }) => theme.storyBg};
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
   border-radius: 8px;
   padding: 14px;
 }

 .story__title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 275px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: ${({ theme }) => theme.fontColor};
  text-overflow: ellipsis;
  overflow:hidden;
 }

`;
