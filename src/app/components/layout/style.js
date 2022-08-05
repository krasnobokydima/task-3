import styled from "styled-components";

export const Message = styled.h2`
  color: gray;
  padding: 10px 20px;
  width: 100%;
  border: 1px solid lightgray;
  border-top: 1px solid transparent;

  font-weight: normal;
  font-size: 1em;
`

export const ErrorMessage = styled(Message)`
  color: red;
  border-color: red;
`

export const Container = styled.div`
  flex-grow: 1;
`