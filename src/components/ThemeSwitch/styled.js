import styled from "styled-components";

export const ThemeWrapper = styled.div`
  .box {
    color: ${(props) => props.color || "red"};
    background: blue;
    height: 100px;
  }
`;
