import styled from "styled-components";

export const Button = styled.button`
  background-color: #ac1a22;
  font-family: "montserrat", cursive;
  font-size: 20px;
  color: #f0efda;
  width: 150px;
  height: 40px;
  border-radius: 7px;
`;

export const SecondaryButton = styled(Button)`
  background-color: #f0efda;
  color: #ac1a22;
`;

export const OutlineButton = styled(Button)`
  background-color: transparent;
  color: #ac1a22;
  border: solid 3px #ac1a22;
`;
