import styled from "styled-components"

export const ContairnerMenu = styled.ul`
 list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: orange;
  position: fixed;
  left: 0;
  right: 0;
  top: 5px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px 0 black;
  //display: inline;

  li {
    margin: 20px;
  }

  li a {
    color: #000;
    text-decoration: none;
  }
`;