import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 100%;
  max-width: 320px;
  input {
    border: 2px solid;
    border-radius: 3px;
    border-color: transparent;
    font-size: 17px;
    height: 23px;
    width: 100%;
  }

  .checkbox-container {
    display: flex;
    align-items: center;

    input {
      width: 30px;
      margin-right: 10px;
    }
  }

  ${(props) =>
    props.isError &&
    css`
      input {
        border-color: #ad2a2a;
      }
      .error {
        color: #ad2a2a;
      }
    `}
`;
