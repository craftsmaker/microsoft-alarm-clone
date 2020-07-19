import styled from "styled-components";

export const AlarmWrapper = styled.div`
  display: flex;
  width: 110vw;
  padding-left: 5px;
  transition: background-color 50ms;
  &:hover {
    background-color: rgba(200, 200, 200,0.4);
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding-left: 10px;
  h1 {
    font-size: 1.6em;
    margin-bottom: 3px;
  }
`;

export const SwitchSelection = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-right: 40%;
`;