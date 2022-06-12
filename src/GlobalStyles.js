import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }

  body{
    font-family: 'Poppins', sans-serif;

  }

  .correct{
    background-color: #23C552 !important;
    color: #232323 !important;
  }

  .incorrect{
    background-color: #F84F31 !important;
    color: #232323 !important;
  }

  #root{
    background-blend-mode: lighten;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(255,255,255,0.25);
  }
  .modal {
    font-size: 12px;
  }
  .modal > .header {
    width: 100%;
    border-bottom: 1px solid gray;
    font-size: 18px;
    text-align: center;
    padding: 5px;
  }
  .modal > .content {
    width: 100%;
    padding: 10px 5px;
  }
  .modal > .actions {
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
  }
  .modal > .close {
    cursor: pointer;
    position: absolute;
    display: block;
    padding: 2px 5px;
    line-height: 20px;
    right: -10px;
    top: -10px;
    font-size: 24px;
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid #cfcece;
  }
`;

export default GlobalStyle;
